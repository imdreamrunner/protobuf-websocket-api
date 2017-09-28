/*
 * !!! GENERATED SOURCE !!!
 * ========================
 *
 * This file is a generated source code by protobuf-websocket-api.
 * You may find more information at https://github.com/imdreamrunner/protobuf-websocket-api.
 *
 */

/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.org = (function() {

    /**
     * Namespace org.
     * @exports org
     * @namespace
     */
    var org = {};

    org.simple = (function() {

        /**
         * Namespace simple.
         * @memberof org
         * @namespace
         */
        var simple = {};

        simple.api = (function() {

            /**
             * Namespace api.
             * @memberof org.simple
             * @namespace
             */
            var api = {};

            api.Person = (function() {

                /**
                 * Properties of a Person.
                 * @memberof org.simple.api
                 * @interface IPerson
                 * @property {string} name Person name
                 */

                /**
                 * Constructs a new Person.
                 * @memberof org.simple.api
                 * @classdesc Represents a Person.
                 * @constructor
                 * @param {org.simple.api.IPerson=} [properties] Properties to set
                 */
                function Person(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Person name.
                 * @member {string}name
                 * @memberof org.simple.api.Person
                 * @instance
                 */
                Person.prototype.name = "";

                /**
                 * Creates a new Person instance using the specified properties.
                 * @function create
                 * @memberof org.simple.api.Person
                 * @static
                 * @param {org.simple.api.IPerson=} [properties] Properties to set
                 * @returns {org.simple.api.Person} Person instance
                 */
                Person.create = function create(properties) {
                    return new Person(properties);
                };

                /**
                 * Encodes the specified Person message. Does not implicitly {@link org.simple.api.Person.verify|verify} messages.
                 * @function encode
                 * @memberof org.simple.api.Person
                 * @static
                 * @param {org.simple.api.IPerson} message Person message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Person.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified Person message, length delimited. Does not implicitly {@link org.simple.api.Person.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.simple.api.Person
                 * @static
                 * @param {org.simple.api.IPerson} message Person message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Person.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Person message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.simple.api.Person
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.simple.api.Person} Person
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Person.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.simple.api.Person();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("name"))
                        throw $util.ProtocolError("missing required 'name'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a Person message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.simple.api.Person
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.simple.api.Person} Person
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Person.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Person message.
                 * @function verify
                 * @memberof org.simple.api.Person
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Person.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.name))
                        return "name: string expected";
                    return null;
                };

                /**
                 * Creates a Person message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.simple.api.Person
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.simple.api.Person} Person
                 */
                Person.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.simple.api.Person)
                        return object;
                    var message = new $root.org.simple.api.Person();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from a Person message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.simple.api.Person
                 * @static
                 * @param {org.simple.api.Person} message Person
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Person.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                /**
                 * Converts this Person to JSON.
                 * @function toJSON
                 * @memberof org.simple.api.Person
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Person.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Person;
            })();

            api.LoginRequest = (function() {

                /**
                 * Properties of a LoginRequest.
                 * @memberof org.simple.api
                 * @interface ILoginRequest
                 * @property {string} username LoginRequest username
                 * @property {string} password LoginRequest password
                 */

                /**
                 * Constructs a new LoginRequest.
                 * @memberof org.simple.api
                 * @classdesc Represents a LoginRequest.
                 * @constructor
                 * @param {org.simple.api.ILoginRequest=} [properties] Properties to set
                 */
                function LoginRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * LoginRequest username.
                 * @member {string}username
                 * @memberof org.simple.api.LoginRequest
                 * @instance
                 */
                LoginRequest.prototype.username = "";

                /**
                 * LoginRequest password.
                 * @member {string}password
                 * @memberof org.simple.api.LoginRequest
                 * @instance
                 */
                LoginRequest.prototype.password = "";

                /**
                 * Creates a new LoginRequest instance using the specified properties.
                 * @function create
                 * @memberof org.simple.api.LoginRequest
                 * @static
                 * @param {org.simple.api.ILoginRequest=} [properties] Properties to set
                 * @returns {org.simple.api.LoginRequest} LoginRequest instance
                 */
                LoginRequest.create = function create(properties) {
                    return new LoginRequest(properties);
                };

                /**
                 * Encodes the specified LoginRequest message. Does not implicitly {@link org.simple.api.LoginRequest.verify|verify} messages.
                 * @function encode
                 * @memberof org.simple.api.LoginRequest
                 * @static
                 * @param {org.simple.api.ILoginRequest} message LoginRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                    return writer;
                };

                /**
                 * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link org.simple.api.LoginRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.simple.api.LoginRequest
                 * @static
                 * @param {org.simple.api.ILoginRequest} message LoginRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a LoginRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.simple.api.LoginRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.simple.api.LoginRequest} LoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.simple.api.LoginRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.username = reader.string();
                            break;
                        case 2:
                            message.password = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("username"))
                        throw $util.ProtocolError("missing required 'username'", { instance: message });
                    if (!message.hasOwnProperty("password"))
                        throw $util.ProtocolError("missing required 'password'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.simple.api.LoginRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.simple.api.LoginRequest} LoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LoginRequest message.
                 * @function verify
                 * @memberof org.simple.api.LoginRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LoginRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.username))
                        return "username: string expected";
                    if (!$util.isString(message.password))
                        return "password: string expected";
                    return null;
                };

                /**
                 * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.simple.api.LoginRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.simple.api.LoginRequest} LoginRequest
                 */
                LoginRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.simple.api.LoginRequest)
                        return object;
                    var message = new $root.org.simple.api.LoginRequest();
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.password != null)
                        message.password = String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.simple.api.LoginRequest
                 * @static
                 * @param {org.simple.api.LoginRequest} message LoginRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LoginRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.username = "";
                        object.password = "";
                    }
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this LoginRequest to JSON.
                 * @function toJSON
                 * @memberof org.simple.api.LoginRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LoginRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return LoginRequest;
            })();

            api.LoginResponse = (function() {

                /**
                 * Properties of a LoginResponse.
                 * @memberof org.simple.api
                 * @interface ILoginResponse
                 * @property {number|Long} error LoginResponse error
                 * @property {string} [message] LoginResponse message
                 */

                /**
                 * Constructs a new LoginResponse.
                 * @memberof org.simple.api
                 * @classdesc Represents a LoginResponse.
                 * @constructor
                 * @param {org.simple.api.ILoginResponse=} [properties] Properties to set
                 */
                function LoginResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * LoginResponse error.
                 * @member {number|Long}error
                 * @memberof org.simple.api.LoginResponse
                 * @instance
                 */
                LoginResponse.prototype.error = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * LoginResponse message.
                 * @member {string}message
                 * @memberof org.simple.api.LoginResponse
                 * @instance
                 */
                LoginResponse.prototype.message = "";

                /**
                 * Creates a new LoginResponse instance using the specified properties.
                 * @function create
                 * @memberof org.simple.api.LoginResponse
                 * @static
                 * @param {org.simple.api.ILoginResponse=} [properties] Properties to set
                 * @returns {org.simple.api.LoginResponse} LoginResponse instance
                 */
                LoginResponse.create = function create(properties) {
                    return new LoginResponse(properties);
                };

                /**
                 * Encodes the specified LoginResponse message. Does not implicitly {@link org.simple.api.LoginResponse.verify|verify} messages.
                 * @function encode
                 * @memberof org.simple.api.LoginResponse
                 * @static
                 * @param {org.simple.api.ILoginResponse} message LoginResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.error);
                    if (message.message != null && message.hasOwnProperty("message"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                    return writer;
                };

                /**
                 * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link org.simple.api.LoginResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.simple.api.LoginResponse
                 * @static
                 * @param {org.simple.api.ILoginResponse} message LoginResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a LoginResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.simple.api.LoginResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.simple.api.LoginResponse} LoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.simple.api.LoginResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.error = reader.int64();
                            break;
                        case 2:
                            message.message = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("error"))
                        throw $util.ProtocolError("missing required 'error'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.simple.api.LoginResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.simple.api.LoginResponse} LoginResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LoginResponse message.
                 * @function verify
                 * @memberof org.simple.api.LoginResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LoginResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.error) && !(message.error && $util.isInteger(message.error.low) && $util.isInteger(message.error.high)))
                        return "error: integer|Long expected";
                    if (message.message != null && message.hasOwnProperty("message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    return null;
                };

                /**
                 * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.simple.api.LoginResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.simple.api.LoginResponse} LoginResponse
                 */
                LoginResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.simple.api.LoginResponse)
                        return object;
                    var message = new $root.org.simple.api.LoginResponse();
                    if (object.error != null)
                        if ($util.Long)
                            (message.error = $util.Long.fromValue(object.error)).unsigned = false;
                        else if (typeof object.error === "string")
                            message.error = parseInt(object.error, 10);
                        else if (typeof object.error === "number")
                            message.error = object.error;
                        else if (typeof object.error === "object")
                            message.error = new $util.LongBits(object.error.low >>> 0, object.error.high >>> 0).toNumber();
                    if (object.message != null)
                        message.message = String(object.message);
                    return message;
                };

                /**
                 * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.simple.api.LoginResponse
                 * @static
                 * @param {org.simple.api.LoginResponse} message LoginResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LoginResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.error = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.error = options.longs === String ? "0" : 0;
                        object.message = "";
                    }
                    if (message.error != null && message.hasOwnProperty("error"))
                        if (typeof message.error === "number")
                            object.error = options.longs === String ? String(message.error) : message.error;
                        else
                            object.error = options.longs === String ? $util.Long.prototype.toString.call(message.error) : options.longs === Number ? new $util.LongBits(message.error.low >>> 0, message.error.high >>> 0).toNumber() : message.error;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    return object;
                };

                /**
                 * Converts this LoginResponse to JSON.
                 * @function toJSON
                 * @memberof org.simple.api.LoginResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LoginResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return LoginResponse;
            })();

            return api;
        })();

        return simple;
    })();

    return org;
})();

module.exports = $root;
