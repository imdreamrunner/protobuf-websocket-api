/*
 * !!! GENERATED SOURCE !!!
 * ========================
 *
 * This file is a generated source code by protobuf-websocket-api.
 * You may find more information at https://github.com/imdreamrunner/protobuf-websocket-api.
 *
 */
import * as ws from "ws";
import * as schema from "./schema";

const port: number = 23333;

const server = new ws.Server({ port: port });

server.on("connection", (client) => {
    client.on("message", (message) => {
        const request = schema.Request.decode(<Uint8Array>message);
        let requestHandled = false;

        if (request.method == "core.transformPerson") {
            const payload = schema.org.simple.api.Person.decode(request.payload);
            console.log(`[PWA] Request #${request.sequence}: ${JSON.stringify(payload)}`);
            const handler = require("./api/core");
            const responsePayload = schema.org.simple.api.Person.create(handler.transformPerson(payload));
            const response = schema.Response.create({sequence: request.sequence, payload: schema.org.simple.api.Person.encode(responsePayload).finish()});
            client.send(schema.Response.encode(response).finish());
            console.log(`[PWA] Replied #${request.sequence}: ${JSON.stringify(responsePayload)}`);
            requestHandled = true;
        }

        if (request.method == "user.transformPerson2") {
            const payload = schema.org.simple.api.Person.decode(request.payload);
            console.log(`[PWA] Request #${request.sequence}: ${JSON.stringify(payload)}`);
            const handler = require("./api/user");
            const responsePayload = schema.org.simple.api.Person.create(handler.transformPerson2(payload));
            const response = schema.Response.create({sequence: request.sequence, payload: schema.org.simple.api.Person.encode(responsePayload).finish()});
            client.send(schema.Response.encode(response).finish());
            console.log(`[PWA] Replied #${request.sequence}: ${JSON.stringify(responsePayload)}`);
            requestHandled = true;
        }

        if (request.method == "user.transformPerson3") {
            const payload = schema.org.simple.api.Person.decode(request.payload);
            console.log(`[PWA] Request #${request.sequence}: ${JSON.stringify(payload)}`);
            const handler = require("./api/user");
            const responsePayload = schema.org.simple.api.Person.create(handler.transformPerson3(payload));
            const response = schema.Response.create({sequence: request.sequence, payload: schema.org.simple.api.Person.encode(responsePayload).finish()});
            client.send(schema.Response.encode(response).finish());
            console.log(`[PWA] Replied #${request.sequence}: ${JSON.stringify(responsePayload)}`);
            requestHandled = true;
        }

        if (!requestHandled) {
            console.warn(`[PWA] Unhandled request "${request.method}".`);
        }
    });
});

console.log(`WebSocket server started at port ${port}.`);
