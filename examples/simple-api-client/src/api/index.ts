import * as schema from "./schema";

console.log("Hello from API.");

const connection = new WebSocket("ws://localhost:23333");
let sequenceID: number = 1;

connection.onopen = (event) => {
    console.log("Connection is established");
};

export function init() {
    console.log("init");
}

export function transformPerson() {
    const person = schema.org.simple.api.Person.create({
        name: "Ivor Zhou"
    });
    const request = schema.Request.create({
        sequence: sequenceID,
        method: "core.transformPerson",
        payload: schema.org.simple.api.Person.encode(person).finish()
    });
    connection.send(schema.Request.encode(request).finish());

    sequenceID ++;
}

