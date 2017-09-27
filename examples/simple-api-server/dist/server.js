"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * !!! GENERATED SOURCE !!!
 * ========================
 *
 * This file is a generated source code by protobuf-websocket-api.
 * You may find more information at https://github.com/imdreamrunner/protobuf-websocket-api.
 *
 */
const ws = require("ws");
const schema = require("./schema");
const port = 23333;
const server = new ws.Server({ port: port });
server.on("connection", (client) => {
    client.on("message", (message) => {
        const request = schema.Request.decode(message);
        console.log(`decoded = ${JSON.stringify(request)}`);
        if (request.method == "core.transformPerson") {
            const payload = schema.org.simple.api.Person.decode(request.payload);
            console.log(`[PWA] Request #${request.sequence}: ${JSON.stringify(payload)}`);
            const handler = require("./api/core");
            const responsePayload = schema.org.simple.api.Person.create(handler.transformPerson(payload));
            const response = schema.Response.create({ sequence: request.sequence, payload: schema.org.simple.api.Person.encode(responsePayload).finish() });
            client.send(schema.Response.encode(response).finish());
            console.log(`[PWA] Replied #${request.sequence}: ${JSON.stringify(responsePayload)}`);
        }
    });
});
console.log(`WebSocket server started at port ${port}.`);
//# sourceMappingURL=server.js.map