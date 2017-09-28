import * as ws from "ws";
import * as schema from "../schema";

export interface HandlerMap {
    [handlerName: string]: {};
}

export interface Endpoint {
    moduleName: string;
    apiName: string;
    requestSchema: any;
    responseSchema: any;
}

export default function handleRequest(server: ws.Server, handlers: HandlerMap, endpoints: Endpoint[]) {
    server.on("connection", (client) => {
        const realSocketObject = (<any>client)._socket;
        console.log(`[PWA] New connection from ${realSocketObject.remoteAddress}:${realSocketObject.remotePort}.`);
        client.on("message", (message) => {
            const request = schema.Request.decode(<Uint8Array>message);
            let requestHandled = false;

            for (const endpoint of endpoints) {
                if (request.method == endpoint.moduleName + "." + endpoint.apiName) {
                    const payload = endpoint.requestSchema.decode(request.payload);
                    console.log(`[PWA] Request #${request.sequence}: ${JSON.stringify(payload)}`);
                    const handler: any = handlers[endpoint.moduleName];
                    const responsePayload = endpoint.responseSchema.create(handler.transformPerson(payload));
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
