import * as schema from "../schema";

let connection: WebSocket;
let sequenceID: number = 0;

const messageHandlers: any = {};

export function initConnection(url: string) {
    connection = new WebSocket(url);
    connection.binaryType = "arraybuffer";
    connection.onopen = (event) => {
        console.log(`Connection to ${url} is established`);
    };
    connection.onmessage = handleMessage;
}

function getConnection() {
    if (!connection) {
        throw new Error("Connection is not established.");
    }
    return connection;
}

function getSequenceID() {
    sequenceID ++;
    return sequenceID;
}

async function blobToArrayBuffer(blob: Blob): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = function() {
            resolve(this.result.slice(0));
        };
        fileReader.readAsArrayBuffer(blob);
    });
}

async function handleMessage(message: MessageEvent) {
    const decodedMessage = schema.Response.decode(new Uint8Array(message.data));
    if (messageHandlers[<number>decodedMessage.sequence]) {
        messageHandlers[<number>decodedMessage.sequence](decodedMessage.payload);
    }
}

export async function callApi(method: string, payload: any): Promise<any> {
    const messageId = getSequenceID();
    const request = schema.Request.create({
        sequence: messageId,
        method: method,
        payload: payload
    });
    connection.send(schema.Request.encode(request).finish());

    return new Promise((resolve, reject) => {
        const callback = (payload: any) => {
            resolve(payload);
        };
        messageHandlers[messageId] = callback;
    });
}
