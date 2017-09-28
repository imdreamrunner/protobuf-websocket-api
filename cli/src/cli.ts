#! /usr/bin/env node

"use strict";

import { generateSchema } from "./generate-schema";
import { generateCode } from "./generate-code";

const args = process.argv.slice(2);

switch (args[0]) {
    case "generate-schema":
        generateSchema(args[1]);
        break;
    case "generate-code":
        generateCode();
        break;
}
