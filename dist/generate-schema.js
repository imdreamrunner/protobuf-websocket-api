"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pbjs = require("protobufjs/cli/pbjs");
const pbts = require("protobufjs/cli/pbts");
const fs = require("async-file");
function generateSchema() {
    const dir = process.cwd();
    pbjs.main([
        "--target", "static-module",
        "--wrap", "commonjs",
        `${dir}/src/protobuf/**/*.proto`,
        `${__dirname}/protobuf/**/*.proto`,
    ], (err, output) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            throw err;
        }
        const generatedHeader = yield fs.readFile(`${__dirname}/templates/generated-sources.js.tmpl`);
        yield fs.writeFile(`${dir}/src/schema.js`, generatedHeader + output);
    }));
    pbts.main([
        `${dir}/src/schema.js`,
    ], (err, output) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            throw err;
        }
        const generatedHeader = yield fs.readFile(`${__dirname}/templates/generated-sources.js.tmpl`);
        yield fs.writeFile(`${dir}/src/schema.d.ts`, generatedHeader + output);
    }));
}
exports.generateSchema = generateSchema;
//# sourceMappingURL=generate-schema.js.map