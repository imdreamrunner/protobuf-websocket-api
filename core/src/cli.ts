#! /usr/bin/env node

"use strict";

import { loadSchema } from "./load-schema";
import { generateServices } from "./generate-services";
import { generateClientEndpoints } from "./generate-client-endpoints";

const args = process.argv.slice(2);

switch (args[0]) {
    case "load-schema":
        loadSchema();
        break;
    case "generate-services":
        generateServices();
        break;
    case "generate-client-endpoints":
        generateClientEndpoints();
        break;
}
