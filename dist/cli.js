#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_schema_1 = require("./generate-schema");
const generate_code_1 = require("./generate-code");
const args = process.argv.slice(2);
switch (args[0]) {
    case "generate-schema":
        generate_schema_1.generateSchema();
        break;
    case "generate-code":
        generate_code_1.generateCode();
        break;
}
//# sourceMappingURL=cli.js.map