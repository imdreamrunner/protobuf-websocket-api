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

            return api;
        })();

        return simple;
    })();

    return org;
})();

module.exports = $root;
