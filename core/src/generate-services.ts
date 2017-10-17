/**
 *
 */

"use strict";

import * as fs from "async-file";
import * as ts from "typescript";
import * as shelljs from "shelljs";
import * as uppercamelcase from "uppercamelcase";

// some packages cannot be loaded by import.
const streamToPromise = require("stream-to-promise");
const esprima = require("esprima");
const mu = require("mu2");

const PACKAGE_NAME_NOTE = "@package";
const ENDPOINT_NAME_NOTE = "@endpoint";
const REQUEST_NOTE = "@request";
const RESPONSE_NOTE = "@response";

class Module {
    sourceFileName: string;
    packageName: string;
    moduleName: string;
    apiList: ApiEndpoint[];
}

class ApiEndpoint {
    moduleName: string;
    endpointName: string;
    requestType: string;
    responseType: string;
    requestTypeInterface: string;
    responseTypeInterface: string;
}

const PROJECT_CWD = process.cwd();

export async function generateServices() {
    const projectDefinition = JSON.parse(await fs.readFile(`${PROJECT_CWD}/package.json`));
    const apiSourceDir = projectDefinition["apiSource"] || "src/api";

    const files = await fs.readdir(`${PROJECT_CWD}/${apiSourceDir}`);

    const moduleList: Module[] = [];

    for (const filename of files) {
        if (filename.indexOf(".js") < 0 && filename.indexOf(".ts") < 0) {
            console.warn(`File ${filename} is not a JavaScript / TypeScript file.`);
        }
        const isTypeScript = filename.indexOf(".ts") >= 0;
        const moduleName = filename.substring(0, filename.lastIndexOf("."));

        const apiList: ApiEndpoint[] = [];

        let fileContent = await fs.readTextFile(`${PROJECT_CWD}/src/api/${filename}`, "utf8");
        if (isTypeScript) {
            fileContent = ts.transpile(fileContent, {
                removeComments: false
            });
        }

        const ast = esprima.parse(fileContent, {
            tolerant: true,
            comment: true
        });
        const comments = ast.comments;
        const blockComments = comments.filter((c: any) => c.type == "Block").map((c: any) => c.value);

        let packageName: string;

        blockComments.forEach((comment: string) => {
            let endpointName: string;
            let requestType: string;
            let responseType: string;
            comment.split("\n").forEach(line => {
                if (line.indexOf(PACKAGE_NAME_NOTE) >= 0) {
                    packageName = extractAttribute(line, PACKAGE_NAME_NOTE);
                    console.log(`[PWA] Generated service ${packageName}.`);
                } else if (line.indexOf(ENDPOINT_NAME_NOTE) >= 0) {
                    endpointName = extractAttribute(line, ENDPOINT_NAME_NOTE);
                } else if (line.indexOf(REQUEST_NOTE) >= 0) {
                    requestType = extractAttribute(line, REQUEST_NOTE);
                } else if (line.indexOf(RESPONSE_NOTE) >= 0) {
                    responseType = extractAttribute(line, RESPONSE_NOTE);
                }
            });
            if (endpointName && requestType && responseType) {
                const requestTypeInterface = getInterfaceNameFromType(requestType);
                const responseTypeInterface = getInterfaceNameFromType(responseType);
                const endpoint = {moduleName, endpointName, requestType, responseType, requestTypeInterface, responseTypeInterface};
                apiList.push(endpoint);

            }
        });

        moduleList.push({
            sourceFileName: filename,
            packageName,
            moduleName,
            apiList,
        });
    }

    for (const module of moduleList) {
        const {sourceFileName, packageName, moduleName, apiList} = module;
        const proto = await generateProto(sourceFileName, packageName, moduleName, apiList);

        const projectDefinition = JSON.parse(await fs.readFile(`${PROJECT_CWD}/package.json`));
        const protoDir = projectDefinition["apiSchema"];
        shelljs.mkdir("-p", `${protoDir}/services`);
        await fs.writeFile(`${protoDir}/services/${moduleName}.proto`, proto);
    }

}

function extractAttribute(line: string, attr: string) {
    return line.substring(line.indexOf(attr) + attr.length + 1).trim();
}

function getInterfaceNameFromType(typeName: string): string {
    const dotPosition = typeName.lastIndexOf(".");
    return typeName.substring(0, dotPosition + 1) + "I" + typeName.substring(dotPosition + 1);
}

async function generateProto(sourceFileName: string, packageName: string, moduleName: string, apiList: ApiEndpoint[]) {
    const serviceName = uppercamelcase(moduleName) + "Service";
    const scriptStream = mu.compileAndRender(`${__dirname}/templates/service.proto.tmpl`, {
        sourceFileName,
        packageName,
        serviceName,
        apiList,
    });
    return (await streamToPromise(scriptStream)).toString();
}
