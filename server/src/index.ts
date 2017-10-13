import * as ws from "ws";
import * as fs from "async-file";
import * as protobuf from "protobufjs";
import * as schema from "../schema";

export interface Endpoint {
    methodName: string;  // the method in the request package.
    handlerModuleName: string;  // the JavaScript module name of the actual implementation.
    handlerMethodName: string;  // the JavaScript method name.
    requestSchema: any;  // the request Protobuf object.
    responseSchema: any;  // the response Protobuf object.
}

const PROJECT_CWD = process.cwd();

async function loadProtobuf(filename: string|string[]): Promise<protobuf.Root> {
    return new Promise<protobuf.Root>((resolve, reject) => {
        protobuf.load(filename, (err, root) => {
            if (err) {
                reject(err);
            } else {
                resolve(root);
            }
        });
    });
}

function getAllServices(root: protobuf.Root): string[] {
    console.log("Name", root.fullName);
    const result: string[] = [];
    if (root.nestedArray.length > 0) {
        for (const nested of root.nestedArray) {
            result.push(...getAllServices(<protobuf.Root>nested));
        }
    } else {
        result.push(root.fullName);
    }
    return result;
}

async function initializeEndpoints() {
    const projectDefinition = JSON.parse(await fs.readFile(`${PROJECT_CWD}/package.json`));
    const protoDir = projectDefinition["apiSchema"];

    const serviceFiles = await fs.readdir(`${protoDir}/services`);
    const schemaFiles = await fs.readdir(`${protoDir}`);

    const serviceRoot = await loadProtobuf(serviceFiles.filter(f => f.indexOf(".proto") >= 0).map(f => `${protoDir}/services/${f}`));
    const schemaRoot = await loadProtobuf(schemaFiles.filter(f => f.indexOf(".proto") >= 0).map(f => `${protoDir}/${f}`));
    const serviceNameList = getAllServices(serviceRoot);

    const endpoints: Endpoint[] = [];

    for (const serviceName of serviceNameList) {
        const serviceObject = serviceRoot.lookupService(serviceName);
        console.log(serviceObject);
        for (const method of serviceObject.methodsArray) {
            console.log("method", method);
            endpoints.push({
                methodName: `${serviceName}.${method.name}`,
                handlerModuleName: getHandlerNameFromProtoFile(protoDir, serviceObject.filename),
                handlerMethodName: method.name,
                requestSchema: schemaRoot.lookup(method.requestType),
                responseSchema: schemaRoot.lookup(method.responseType)
            });
        }
    }
    console.log(endpoints);
    return endpoints;
}

function getHandlerNameFromProtoFile(protoDir: string, protoFile: string) {
    return protoFile.substring(protoDir.length, protoFile.length - ".proto".length);
}

export default async function handleRequest(server: ws.Server) {
    const endpoints = await initializeEndpoints();

    server.on("connection", (client) => {
        const realSocketObject = (<any>client)._socket;
        console.log(`[PWA] New connection from ${realSocketObject.remoteAddress}:${realSocketObject.remotePort}.`);
        client.on("message", (message) => {
            const request = schema.Request.decode(<Uint8Array>message);
            let requestHandled = false;

            for (const endpoint of endpoints) {
                if (request.method == endpoint.methodName) {
                    const payload = endpoint.requestSchema.decode(request.payload);
                    console.log(`[PWA] Request #${request.sequence}: ${JSON.stringify(payload)}`);
                    const handler: any = require(`./dist/api/${endpoint.handlerModuleName}`);
                    const responsePayload = endpoint.responseSchema.create(handler[endpoint.handlerMethodName](payload));
                    const response = schema.Response.create({sequence: request.sequence, payload: endpoint.responseSchema.encode(responsePayload).finish()});
                    client.send(schema.Response.encode(response).finish());
                    console.log(`[PWA] Replied #${request.sequence}: ${JSON.stringify(responsePayload)}`);
                    requestHandled = true;
                }
            }

            if (!requestHandled) {
                console.warn(`[PWA] Unhandled request "${request.method}".`);
            }
        });
    });
}
