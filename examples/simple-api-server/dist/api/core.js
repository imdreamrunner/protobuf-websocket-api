"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @api transformPerson
 * @request org.simple.api.Person
 * @response org.simple.api.Person
 */
function transformPerson(person) {
    person.name = "new name";
    return person;
}
exports.transformPerson = transformPerson;
//# sourceMappingURL=core.js.map