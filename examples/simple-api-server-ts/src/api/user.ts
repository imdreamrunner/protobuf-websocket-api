/**
 * User API
 *
 * @package org.sample.services
 */

import * as schema from "protobuf-websocket-api/project/schema";

/**
 * @endpoint login
 * @request org.simple.api.LoginRequest
 * @response org.simple.api.LoginResponse
 */
export function login(request: schema.org.simple.api.ILoginRequest): schema.org.simple.api.ILoginResponse {
    if (request.username == "ivor" && request.password == "123") {
        return {
            error: 0,
            message: "Hello Ivor!"
        };
    }
    return {
        error: 1,
        message: "Incorrect username or password."
    };
}
