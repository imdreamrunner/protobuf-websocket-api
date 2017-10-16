import * as fs from "async-file";
import * as ts from "typescript";
import * as protobuf from "protobufjs";
import * as schema from "../schema";
import * as shelljs from "shelljs";

const streamToPromise = require("stream-to-promise");
const mu = require("mu2");

// TODO: Shall we move this feature to cli package?

export interface ClientSideEndpoint {
    methodName: string;  // the method in the request package.
    functionName: string;  // the JavaScript function name.
    requestType: string;
    requestTypeInterface: string;  // the request schema interface name.
    responseType: string;
    responseTypeInterface: string;  // the response schema interface name.
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

async function iterateEndpoints() {
    const projectDefinition = JSON.parse(await fs.readFile(`${PROJECT_CWD}/package.json`));
    const protoDir = projectDefinition["apiSchema"];

    const serviceFiles = await fs.readdir(`${protoDir}/services`);
    const schemaFiles = await fs.readdir(`${protoDir}`);

    const serviceRoot = await loadProtobuf(serviceFiles.filter(f => f.indexOf(".proto") >= 0).map(f => `${protoDir}/services/${f}`));
    const schemaRoot = await loadProtobuf(schemaFiles.filter(f => f.indexOf(".proto") >= 0).map(f => `${protoDir}/${f}`));
    const serviceNameList = getAllServices(serviceRoot);


    for (const serviceName of serviceNameList) {
        const serviceObject = serviceRoot.lookupService(serviceName);
        const moduleName = getModuleNameFromProtoFile(protoDir, serviceObject.filename);
        const endpoints: ClientSideEndpoint[] = [];
        for (const method of serviceObject.methodsArray) {
            endpoints.push({
                methodName: `${serviceName.substring(1)}.${method.name}`,
                functionName: method.name,
                requestType: method.requestType,
                requestTypeInterface: getInterfaceNameFromType(method.requestType),
                responseType: method.responseType,
                responseTypeInterface: getInterfaceNameFromType(method.responseType),
            });
        }

        const localApiFileContent = await generateClientFile(endpoints);
        shelljs.mkdir("-p", `${__dirname}/../project`);
        console.log(`${__dirname}/../project/${moduleName}.ts`);
        console.log(localApiFileContent);
        await fs.writeFile(`${__dirname}/../project/${moduleName}.ts`, localApiFileContent);

        const localApiFileContentJS = ts.transpile(localApiFileContent, {
            removeComments: false
        });
        await fs.writeFile(`${__dirname}/../project/${moduleName}.js`, localApiFileContentJS);
    }
}

function getModuleNameFromProtoFile(protoDir: string, protoFile: string) {
    return protoFile.substring(`${protoDir}/services/`.length, protoFile.length - ".proto".length);
}

function getInterfaceNameFromType(typeName: string): string {
    const dotPosition = typeName.lastIndexOf(".");
    return typeName.substring(0, dotPosition + 1) + "I" + typeName.substring(dotPosition + 1);
}

async function generateClientFile(endpoints: ClientSideEndpoint[]) {
    const scriptStream = mu.compileAndRender(`${__dirname}/templates/client.ts.tmpl`, {endpoints});
    return (await streamToPromise(scriptStream)).toString();
}

export default async function generateLocalAPIs() {
    await iterateEndpoints();
}
