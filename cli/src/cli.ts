#! /usr/bin/env node

"use strict";

import { loadSchema } from "./load-schema";
import { generateServices } from "./generate-services";

const args = process.argv.slice(2);

switch (args[0]) {
    case "load-schema":
        loadSchema();
        break;
    case "generate-services":
        generateServices();
        break;
}
