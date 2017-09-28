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
        }
    }
}