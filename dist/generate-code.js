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
const fs = require("async-file");
const ts = require("typescript");
// some packages cannot be loaded by import.
const streamToPromise = require("stream-to-promise");
const esprima = require("esprima");
const mu = require("mu2");
const API_NOTE = "@api";
const REQUEST_NOTE = "@request";
const RESPONSE_NOTE = "@response";
class ApiEndpoint {
}
function generateCode() {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = process.cwd();
        const files = yield fs.readdir(`${dir}/src/api`);
        const apiList = [];
        for (const filename of files) {
            if (filename.indexOf(".js") < 0 && filename.indexOf(".ts") < 0) {
                console.warn(`File ${filename} is not a JavaScript / TypeScript file.`);
            }
            const isTypeScript = filename.indexOf(".ts") >= 0;
            const moduleName = filename.substring(0, filename.lastIndexOf("."));
            console.log(`${dir}/src/api/${filename}`);
            let fileContent = yield fs.readTextFile(`${dir}/src/api/${filename}`, "utf8");
            if (isTypeScript) {
                fileContent = ts.transpile(fileContent);
            }
            const ast = esprima.parse(fileContent, {
                tolerant: true,
                comment: true
            });
            const comments = ast.comments;
            const blockComments = comments.filter((c) => c.type == "Block").map((c) => c.value);
            blockComments.forEach((comment) => {
                let apiName;
                let requestType;
                let responseType;
                comment.split("\n").forEach(line => {
                    if (line.indexOf(API_NOTE) >= 0) {
                        apiName = line.substring(line.indexOf(API_NOTE) + API_NOTE.length + 1);
                    }
                    else if (line.indexOf(REQUEST_NOTE) >= 0) {
                        requestType = line.substring(line.indexOf(REQUEST_NOTE) + REQUEST_NOTE.length + 1);
                    }
                    else if (line.indexOf(RESPONSE_NOTE) >= 0) {
                        responseType = line.substring(line.indexOf(RESPONSE_NOTE) + RESPONSE_NOTE.length + 1);
                    }
                });
                if (apiName && requestType && responseType) {
                    apiList.push({ moduleName, apiName, requestType, responseType });
                }
            });
        }
        const serverScript = (yield streamToPromise(mu.compileAndRender(`${__dirname}/templates/server.ts.tmpl`, { apiList }))).toString();
        const generatedHeader = yield fs.readFile(`${__dirname}/templates/generated-sources.js.tmpl`);
        yield fs.writeFile(`${dir}/src/server.ts`, generatedHeader + serverScript);
    });
}
exports.generateCode = generateCode;
//# sourceMappingURL=generate-code.js.map