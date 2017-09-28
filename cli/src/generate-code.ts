"use strict";

import * as fs from "async-file";
import * as ts from "typescript";

// some packages cannot be loaded by import.
const streamToPromise = require("stream-to-promise");
const esprima = require("esprima");
const mu = require("mu2");

const API_NOTE = "@api";
const REQUEST_NOTE = "@request";
const RESPONSE_NOTE = "@response";

class Handler {
    moduleName: string;
}

class ApiEndpoint {
    moduleName: string;
    apiName: string;
    requestType: string;
    responseType: string;
}

export async function generateCode() {
    const dir = process.cwd();
    const files = await fs.readdir(`${dir}/src/api`);

    const apiList: ApiEndpoint[] = [];
    const handlerList: Handler[] = [];

    for (const filename of files) {
        if (filename.indexOf(".js") < 0 && filename.indexOf(".ts") < 0) {
            console.warn(`File ${filename} is not a JavaScript / TypeScript file.`);
        }
        const isTypeScript = filename.indexOf(".ts") >= 0;
        const moduleName = filename.substring(0, filename.lastIndexOf("."));

        handlerList.push({moduleName});

        let fileContent = await fs.readTextFile(`${dir}/src/api/${filename}`, "utf8");
        if (isTypeScript) {
            fileContent = ts.transpile(fileContent);
        }

        const ast = esprima.parse(fileContent, {
            tolerant: true,
            comment: true
        });
        const comments = ast.comments;
        const blockComments = comments.filter((c: any) => c.type == "Block").map((c: any) => c.value);

        blockComments.forEach((comment: string) => {
            let apiName: string;
            let requestType: string;
            let responseType: string;
            comment.split("\n").forEach(line => {
                if (line.indexOf(API_NOTE) >= 0) {
                    apiName = line.substring(line.indexOf(API_NOTE) + API_NOTE.length + 1);
                } else if (line.indexOf(REQUEST_NOTE) >= 0) {
                    requestType = line.substring(line.indexOf(REQUEST_NOTE) + REQUEST_NOTE.length + 1);
                } else if (line.indexOf(RESPONSE_NOTE) >= 0) {
                    responseType = line.substring(line.indexOf(RESPONSE_NOTE) + RESPONSE_NOTE.length + 1);
                }
            });
            if (apiName && requestType && responseType) {
                apiList.push({moduleName, apiName, requestType, responseType});
            }
        });
    }

    const generatedHeader = await fs.readFile(`${__dirname}/templates/generated-sources.js.tmpl`);
    const serverScript = await generateServerScript(apiList, handlerList);

    await fs.writeFile(`${dir}/src/server.ts`, generatedHeader + serverScript);
}

async function generateServerScript(apiList: ApiEndpoint[], handlerList: Handler[]) {
    const scriptStream = mu.compileAndRender(`${__dirname}/templates/server.ts.tmpl`, {apiList, handlerList});
    return (await streamToPromise(scriptStream)).toString();
}

async function generateClientScript(apiList: ApiEndpoint[], handlerList: Handler[]) {
    // todo
}
