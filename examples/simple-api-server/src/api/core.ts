/**
 * Core API
 *
 * @package org.sample.services
 */

import * as schema from "protobuf-websocket-api/project/schema";

/**
 * @endpoint transformPerson
 * @request org.simple.api.Person
 * @response org.simple.api.Person
 */
export function transformPerson(person: schema.org.simple.api.IPerson): schema.org.simple.api.IPerson {
    person.name = "new name";
    return person;
}
