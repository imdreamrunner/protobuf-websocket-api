/*
 * !!! GENERATED SOURCE !!!
 * ========================
 *
 * This file is a generated source code by protobuf-websocket-api.
 * You may find more information at https://github.com/imdreamrunner/protobuf-websocket-api.
 *
 */

import * as schema from "../../schema";
import { callApi } from "protobuf-websocket-api-client";


export async function transformPerson2(requestData: schema.org.simple.api.IPerson): Promise<schema.org.simple.api.IPerson> {
    const requestPayloadObject = schema.org.simple.api.Person.create(requestData);
    const requestPayloadBytes = schema.org.simple.api.Person.encode(requestPayloadObject).finish();
    const payload = await callApi("user.transformPerson2", requestPayloadBytes);
    return schema.org.simple.api.Person.decode(payload);
}

export async function transformPerson3(requestData: schema.org.simple.api.IPerson): Promise<schema.org.simple.api.IPerson> {
    const requestPayloadObject = schema.org.simple.api.Person.create(requestData);
    const requestPayloadBytes = schema.org.simple.api.Person.encode(requestPayloadObject).finish();
    const payload = await callApi("user.transformPerson3", requestPayloadBytes);
    return schema.org.simple.api.Person.decode(payload);
}

