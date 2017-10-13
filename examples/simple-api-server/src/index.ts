import handleRequest from "protobuf-websocket-api-server";
import * as ws from "ws";

const port: number = 23333;

const server = new ws.Server({ port: port });
handleRequest(server);
console.log(`WebSocket server started at port ${port}.`);
