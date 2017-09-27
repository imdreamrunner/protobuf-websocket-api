// import * as ws from "ws";
// import * as schema from "./schema";

// const connection = new ws("ws://localhost:23333");

// connection.on("open", () => {
//     const person = schema.org.simple.api.Person.create({
//         name: "Ivor Zhou"
//     });
//     const request = schema.Request.create({
//         sequence: 1,
//         method: "core.transformPerson",
//         payload: schema.org.simple.api.Person.encode(person).finish()
//     });
//     connection.send(schema.Request.encode(request).finish());
// });

// connection.on("message", (message) => {
//     const request = schema.Response.decode(<Uint8Array>message);
//     console.log(`decoded = ${JSON.stringify(request)}`);
//     const payload = schema.org.simple.api.Person.decode(request.payload);
//     console.log(`payload = ${JSON.stringify(payload)}`);
// });
