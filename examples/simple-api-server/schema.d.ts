import * as $protobuf from "protobufjs";

/** Namespace tutorial. */
export namespace tutorial {

    /** Properties of a Person. */
    interface IPerson {

        /** Person name */
        name: string;

        /** Person id */
        id: number;

        /** Person email */
        email?: string;

        /** Person phones */
        phones?: tutorial.Person.IPhoneNumber[];
    }

    /** Represents a Person. */
    class Person {

        /**
         * Constructs a new Person.
         * @param [properties] Properties to set
         */
        constructor(properties?: tutorial.IPerson);

        /** Person name. */
        public name: string;

        /** Person id. */
        public id: number;

        /** Person email. */
        public email: string;

        /** Person phones. */
        public phones: tutorial.Person.IPhoneNumber[];

        /**
         * Creates a new Person instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Person instance
         */
        public static create(properties?: tutorial.IPerson): tutorial.Person;

        /**
         * Encodes the specified Person message. Does not implicitly {@link tutorial.Person.verify|verify} messages.
         * @param message Person message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tutorial.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link tutorial.Person.verify|verify} messages.
         * @param message Person message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tutorial.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Person message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tutorial.Person;

        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tutorial.Person;

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
        public static fromObject(object: { [k: string]: any }): tutorial.Person;

        /**
         * Creates a plain object from a Person message. Also converts values to other types if specified.
         * @param message Person
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tutorial.Person, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Person to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Person {

        /** PhoneType enum. */
        enum PhoneType {
            MOBILE = 0,
            HOME = 1,
            WORK = 2
        }

        /** Properties of a PhoneNumber. */
        interface IPhoneNumber {

            /** PhoneNumber number */
            number: string;

            /** PhoneNumber type */
            type?: tutorial.Person.PhoneType;
        }

        /** Represents a PhoneNumber. */
        class PhoneNumber {

            /**
             * Constructs a new PhoneNumber.
             * @param [properties] Properties to set
             */
            constructor(properties?: tutorial.Person.IPhoneNumber);

            /** PhoneNumber number. */
            public number: string;

            /** PhoneNumber type. */
            public type: tutorial.Person.PhoneType;

            /**
             * Creates a new PhoneNumber instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhoneNumber instance
             */
            public static create(properties?: tutorial.Person.IPhoneNumber): tutorial.Person.PhoneNumber;

            /**
             * Encodes the specified PhoneNumber message. Does not implicitly {@link tutorial.Person.PhoneNumber.verify|verify} messages.
             * @param message PhoneNumber message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tutorial.Person.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link tutorial.Person.PhoneNumber.verify|verify} messages.
             * @param message PhoneNumber message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tutorial.Person.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhoneNumber message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhoneNumber
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tutorial.Person.PhoneNumber;

            /**
             * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhoneNumber
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tutorial.Person.PhoneNumber;

            /**
             * Verifies a PhoneNumber message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhoneNumber
             */
            public static fromObject(object: { [k: string]: any }): tutorial.Person.PhoneNumber;

            /**
             * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
             * @param message PhoneNumber
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tutorial.Person.PhoneNumber, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhoneNumber to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an AddressBook. */
    interface IAddressBook {

        /** AddressBook people */
        people?: tutorial.IPerson[];
    }

    /** Represents an AddressBook. */
    class AddressBook {

        /**
         * Constructs a new AddressBook.
         * @param [properties] Properties to set
         */
        constructor(properties?: tutorial.IAddressBook);

        /** AddressBook people. */
        public people: tutorial.IPerson[];

        /**
         * Creates a new AddressBook instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddressBook instance
         */
        public static create(properties?: tutorial.IAddressBook): tutorial.AddressBook;

        /**
         * Encodes the specified AddressBook message. Does not implicitly {@link tutorial.AddressBook.verify|verify} messages.
         * @param message AddressBook message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tutorial.IAddressBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddressBook message, length delimited. Does not implicitly {@link tutorial.AddressBook.verify|verify} messages.
         * @param message AddressBook message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tutorial.IAddressBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddressBook message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tutorial.AddressBook;

        /**
         * Decodes an AddressBook message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tutorial.AddressBook;

        /**
         * Verifies an AddressBook message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddressBook message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddressBook
         */
        public static fromObject(object: { [k: string]: any }): tutorial.AddressBook;

        /**
         * Creates a plain object from an AddressBook message. Also converts values to other types if specified.
         * @param message AddressBook
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tutorial.AddressBook, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddressBook to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
