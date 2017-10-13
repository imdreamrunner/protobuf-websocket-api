/**
 * generate-schema
 * ===============
 *
 * This file generates API-schema
 */

"use strict";

import * as pbjs from "protobufjs/cli/pbjs";
import * as pbts from "protobufjs/cli/pbts";
import * as fs from "async-file";
import * as shelljs from "shelljs";


const PROJECT_CWD = process.cwd();


export async function loadSchema() {

    const projectDefinition = JSON.parse(await fs.readFile(`${PROJECT_CWD}/package.json`));
    const protoDir = projectDefinition["apiSchema"];

    shelljs.mkdir("-p", `${__dirname}/../project`);

    await generateSchemaJS(protoDir);
    await gtenerateDefinition();
}

async function generateSchemaJS(protoDir: string) {
    return new Promise(resolve => {
        pbjs.main(
            [
                "--target", "static-module",
                "--wrap", "commonjs",
                `${PROJECT_CWD}/${protoDir}/**/*.proto`,
            ],
            async (err: Error|null, output?: string) => {
                if (err) {
                    throw err;
                }
                const generatedHeader = await fs.readFile(`${__dirname}/templates/generated-sources.js.tmpl`);
                await fs.writeFile(`${__dirname}/../project/schema.js`, generatedHeader + output);
                resolve();
            },
        );
    });
}

async function gtenerateDefinition() {
    return new Promise(resolve => {
        pbts.main(
            [
                `${__dirname}/../project/schema.js`,
            ],
            async (err: Error|null, output?: string) => {
                if (err) {
                    throw err;
                }
                const generatedHeader = await fs.readFile(`${__dirname}/templates/generated-sources.js.tmpl`);
                await fs.writeFile(`${__dirname}/../project/schema.d.ts`, generatedHeader + output);
                resolve();
            },
        );
    });
}