import * as schema from "./schema";
import { callApi } from "./index";

export async function transformPerson(requestData: schema.org.simple.api.IPerson): Promise<schema.org.simple.api.IPerson> {
    const requestPayloadObject = schema.org.simple.api.Person.create(requestData);
    const requestPayloadBytes = schema.org.simple.api.Person.encode(requestPayloadObject).finish()
    const payload = await callApi("core.transformPerson", requestPayloadBytes);
    return schema.org.simple.api.Person.decode(payload);
}
