import * as schema from "../../schema";

/**
 * @api transformPerson2
 * @request org.simple.api.Person
 * @response org.simple.api.Person
 */
export function transformPerson2(person: schema.org.simple.api.IPerson): schema.org.simple.api.IPerson {
    person.name = "new name 2";
    return person;
}

/**
 * @api transformPerson3
 * @request org.simple.api.Person
 * @response org.simple.api.Person
 */
export function transformPerson3(person: schema.org.simple.api.IPerson): schema.org.simple.api.IPerson {
    person.name = "new name 3";
    return person;
}
