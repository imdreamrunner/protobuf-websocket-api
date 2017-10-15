/*
 * !!! GENERATED SOURCE !!!
 * ========================
 *
 * This file is a generated source code by protobuf-websocket-api.
 * You may find more information at https://github.com/imdreamrunner/protobuf-websocket-api.
 *
 */

import * as $protobuf from "protobufjs";

/** Namespace org. */
export namespace org {

    /** Namespace simple. */
    namespace simple {

        /** Namespace api. */
        namespace api {

            /** Properties of a Person. */
            interface IPerson {

                /** Person name */
                name: string;
            }

            /** Represents a Person. */
            class Person {

                /**
                 * Constructs a new Person.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.simple.api.IPerson);

                /** Person name. */
                public name: string;

                /**
                 * Creates a new Person instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Person instance
                 */
                public static create(properties?: org.simple.api.IPerson): org.simple.api.Person;

                /**
                 * Encodes the specified Person message. Does not implicitly {@link org.simple.api.Person.verify|verify} messages.
                 * @param message Person message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.simple.api.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Person message, length delimited. Does not implicitly {@link org.simple.api.Person.verify|verify} messages.
                 * @param message Person message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.simple.api.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Person message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Person
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.simple.api.Person;

                /**
                 * Decodes a Person message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Person
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.simple.api.Person;

                /**
                 * Verifies a Person message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Person message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Person
                 */
                public static fromObject(object: { [k: string]: any }): org.simple.api.Person;

                /**
                 * Creates a plain object from a Person message. Also converts values to other types if specified.
                 * @param message Person
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.simple.api.Person, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Person to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LoginRequest. */
            interface ILoginRequest {

                /** LoginRequest username */
                username: string;

                /** LoginRequest password */
                password: string;
            }

            /** Represents a LoginRequest. */
            class LoginRequest {

                /**
                 * Constructs a new LoginRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.simple.api.ILoginRequest);

                /** LoginRequest username. */
                public username: string;

                /** LoginRequest password. */
                public password: string;

                /**
                 * Creates a new LoginRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoginRequest instance
                 */
                public static create(properties?: org.simple.api.ILoginRequest): org.simple.api.LoginRequest;

                /**
                 * Encodes the specified LoginRequest message. Does not implicitly {@link org.simple.api.LoginRequest.verify|verify} messages.
                 * @param message LoginRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.simple.api.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link org.simple.api.LoginRequest.verify|verify} messages.
                 * @param message LoginRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.simple.api.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LoginRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.simple.api.LoginRequest;

                /**
                 * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.simple.api.LoginRequest;

                /**
                 * Verifies a LoginRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LoginRequest
                 */
                public static fromObject(object: { [k: string]: any }): org.simple.api.LoginRequest;

                /**
                 * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
                 * @param message LoginRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.simple.api.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LoginRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LoginResponse. */
            interface ILoginResponse {

                /** LoginResponse error */
                error: (number|Long);

                /** LoginResponse message */
                message?: string;
            }

            /** Represents a LoginResponse. */
            class LoginResponse {

                /**
                 * Constructs a new LoginResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.simple.api.ILoginResponse);

                /** LoginResponse error. */
                public error: (number|Long);

                /** LoginResponse message. */
                public message: string;

                /**
                 * Creates a new LoginResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoginResponse instance
                 */
                public static create(properties?: org.simple.api.ILoginResponse): org.simple.api.LoginResponse;

                /**
                 * Encodes the specified LoginResponse message. Does not implicitly {@link org.simple.api.LoginResponse.verify|verify} messages.
                 * @param message LoginResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.simple.api.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link org.simple.api.LoginResponse.verify|verify} messages.
                 * @param message LoginResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.simple.api.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LoginResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.simple.api.LoginResponse;

                /**
                 * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.simple.api.LoginResponse;

                /**
                 * Verifies a LoginResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LoginResponse
                 */
                public static fromObject(object: { [k: string]: any }): org.simple.api.LoginResponse;

                /**
                 * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
                 * @param message LoginResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.simple.api.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LoginResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace sample. */
    namespace sample {

        /** Namespace services. */
        namespace services {

            /** Represents a CoreService */
            class CoreService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new CoreService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new CoreService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CoreService;

                /**
                 * Calls transformPerson.
                 * @param request Person message or plain object
                 * @param callback Node-style callback called with the error, if any, and Person
                 */
                public transformPerson(request: org.simple.api.IPerson, callback: org.sample.services.CoreService.transformPersonCallback): void;

                /**
                 * Calls transformPerson.
                 * @param request Person message or plain object
                 * @returns Promise
                 */
                public transformPerson(request: org.simple.api.IPerson): Promise<org.simple.api.Person>;
            }

            namespace CoreService {

                /**
                 * Callback as used by {@link org.sample.services.CoreService#transformPerson}.
                 * @param error Error, if any
                 * @param [response] Person
                 */
                type transformPersonCallback = (error: (Error|null), response?: org.simple.api.Person) => void;
            }

            /** Represents a UserService */
            class UserService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new UserService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new UserService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UserService;

                /**
                 * Calls login.
                 * @param request LoginRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LoginResponse
                 */
                public login(request: org.simple.api.ILoginRequest, callback: org.sample.services.UserService.loginCallback): void;

                /**
                 * Calls login.
                 * @param request LoginRequest message or plain object
                 * @returns Promise
                 */
                public login(request: org.simple.api.ILoginRequest): Promise<org.simple.api.LoginResponse>;
            }

            namespace UserService {

                /**
                 * Callback as used by {@link org.sample.services.UserService#login}.
                 * @param error Error, if any
                 * @param [response] LoginResponse
                 */
                type loginCallback = (error: (Error|null), response?: org.simple.api.LoginResponse) => void;
            }
        }
    }
}
