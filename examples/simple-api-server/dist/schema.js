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
$root.org = (function () {
    /**
     * Namespace org.
     * @exports org
     * @namespace
     */
    var org = {};
    org.simple = (function () {
        /**
         * Namespace simple.
         * @memberof org
         * @namespace
         */
        var simple = {};
        simple.api = (function () {
            /**
             * Namespace api.
             * @memberof org.simple
             * @namespace
             */
            var api = {};
            api.Person = (function () {
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
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
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
            return api;
        })();
        return simple;
    })();
    return org;
})();
$root.Request = (function () {
    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {number|Long} sequence Request sequence
     * @property {string} method Request method
     * @property {Uint8Array} payload Request payload
     */
    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Request sequence.
     * @member {number|Long}sequence
     * @memberof Request
     * @instance
     */
    Request.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    /**
     * Request method.
     * @member {string}method
     * @memberof Request
     * @instance
     */
    Request.prototype.method = "";
    /**
     * Request payload.
     * @member {Uint8Array}payload
     * @memberof Request
     * @instance
     */
    Request.prototype.payload = $util.newBuffer([]);
    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };
    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.sequence);
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.method);
        writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.payload);
        return writer;
    };
    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int64();
                    break;
                case 2:
                    message.method = reader.string();
                    break;
                case 3:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("sequence"))
            throw $util.ProtocolError("missing required 'sequence'", { instance: message });
        if (!message.hasOwnProperty("method"))
            throw $util.ProtocolError("missing required 'method'", { instance: message });
        if (!message.hasOwnProperty("payload"))
            throw $util.ProtocolError("missing required 'payload'", { instance: message });
        return message;
    };
    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.sequence) && !(message.sequence && $util.isInteger(message.sequence.low) && $util.isInteger(message.sequence.high)))
            return "sequence: integer|Long expected";
        if (!$util.isString(message.method))
            return "method: string expected";
        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
            return "payload: buffer expected";
        return null;
    };
    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        var message = new $root.Request();
        if (object.sequence != null)
            if ($util.Long)
                (message.sequence = $util.Long.fromValue(object.sequence)).unsigned = false;
            else if (typeof object.sequence === "string")
                message.sequence = parseInt(object.sequence, 10);
            else if (typeof object.sequence === "number")
                message.sequence = object.sequence;
            else if (typeof object.sequence === "object")
                message.sequence = new $util.LongBits(object.sequence.low >>> 0, object.sequence.high >>> 0).toNumber();
        if (object.method != null)
            message.method = String(object.method);
        if (object.payload != null)
            if (typeof object.payload === "string")
                $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
            else if (object.payload.length)
                message.payload = object.payload;
        return message;
    };
    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.sequence = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            }
            else
                object.sequence = options.longs === String ? "0" : 0;
            object.method = "";
            object.payload = options.bytes === String ? "" : [];
        }
        if (message.sequence != null && message.hasOwnProperty("sequence"))
            if (typeof message.sequence === "number")
                object.sequence = options.longs === String ? String(message.sequence) : message.sequence;
            else
                object.sequence = options.longs === String ? $util.Long.prototype.toString.call(message.sequence) : options.longs === Number ? new $util.LongBits(message.sequence.low >>> 0, message.sequence.high >>> 0).toNumber() : message.sequence;
        if (message.method != null && message.hasOwnProperty("method"))
            object.method = message.method;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
        return object;
    };
    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Request;
})();
$root.Response = (function () {
    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {number|Long} sequence Response sequence
     * @property {Uint8Array} payload Response payload
     */
    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Response sequence.
     * @member {number|Long}sequence
     * @memberof Response
     * @instance
     */
    Response.prototype.sequence = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    /**
     * Response payload.
     * @member {Uint8Array}payload
     * @memberof Response
     * @instance
     */
    Response.prototype.payload = $util.newBuffer([]);
    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };
    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.sequence);
        writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.payload);
        return writer;
    };
    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int64();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("sequence"))
            throw $util.ProtocolError("missing required 'sequence'", { instance: message });
        if (!message.hasOwnProperty("payload"))
            throw $util.ProtocolError("missing required 'payload'", { instance: message });
        return message;
    };
    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.sequence) && !(message.sequence && $util.isInteger(message.sequence.low) && $util.isInteger(message.sequence.high)))
            return "sequence: integer|Long expected";
        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
            return "payload: buffer expected";
        return null;
    };
    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        var message = new $root.Response();
        if (object.sequence != null)
            if ($util.Long)
                (message.sequence = $util.Long.fromValue(object.sequence)).unsigned = false;
            else if (typeof object.sequence === "string")
                message.sequence = parseInt(object.sequence, 10);
            else if (typeof object.sequence === "number")
                message.sequence = object.sequence;
            else if (typeof object.sequence === "object")
                message.sequence = new $util.LongBits(object.sequence.low >>> 0, object.sequence.high >>> 0).toNumber();
        if (object.payload != null)
            if (typeof object.payload === "string")
                $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
            else if (object.payload.length)
                message.payload = object.payload;
        return message;
    };
    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.sequence = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            }
            else
                object.sequence = options.longs === String ? "0" : 0;
            object.payload = options.bytes === String ? "" : [];
        }
        if (message.sequence != null && message.hasOwnProperty("sequence"))
            if (typeof message.sequence === "number")
                object.sequence = options.longs === String ? String(message.sequence) : message.sequence;
            else
                object.sequence = options.longs === String ? $util.Long.prototype.toString.call(message.sequence) : options.longs === Number ? new $util.LongBits(message.sequence.low >>> 0, message.sequence.high >>> 0).toNumber() : message.sequence;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
        return object;
    };
    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Response;
})();
module.exports = $root;
//# sourceMappingURL=schema.js.map