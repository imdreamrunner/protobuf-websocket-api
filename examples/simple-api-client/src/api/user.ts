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


export async function login(requestData: schema.org.simple.api.ILoginRequest): Promise<schema.org.simple.api.ILoginResponse> {
    const requestPayloadObject = schema.org.simple.api.LoginRequest.create(requestData);
    const requestPayloadBytes = schema.org.simple.api.LoginRequest.encode(requestPayloadObject).finish();
    const payload = await callApi("user.login", requestPayloadBytes);
    return schema.org.simple.api.LoginResponse.decode(payload);
}

