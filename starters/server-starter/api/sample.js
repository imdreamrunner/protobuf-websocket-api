/**
 * @endpoint login
 * @request LoginRequest
 * @response LoginResponse
 */
exports.login = function login(request) {
    if (request.username === "peter" && request.password === "123") {
        return {
            error: 0,
            message: "Hello Peter!"
        }
    }
    return {
        error: 1,
        message: "Incorrect username or password."
    }
}
