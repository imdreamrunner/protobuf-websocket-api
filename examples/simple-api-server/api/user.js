/**
 * User API
 *
 * @package org.sample.services
 */

/**
 * @endpoint login
 * @request org.simple.api.LoginRequest
 * @response org.simple.api.LoginResponse
 */
exports.login = function login(request) {
    if (request.username === "ivor" && request.password === "123") {
        return {
            error: 0,
            message: "Hello Ivor!"
        }
    }
    return {
        error: 1,
        message: "Incorrect username or password."
    }
}
