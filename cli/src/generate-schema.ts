"use strict";

import * as pbjs from "protobufjs/cli/pbjs";
import * as pbts from "protobufjs/cli/pbts";
import * as fs from "async-file";


export function generateSchema(protoDir: string) {
    const dir = process.cwd();

    pbjs.main(
        [
            "--target", "static-module",
            "--wrap", "commonjs",
            `${dir}/${protoDir}/**/*.proto`,
        ],
        async (err: Error|null, output?: string) => {
            if (err) {
                throw err;
            }
            const generatedHeader = await fs.readFile(`${__dirname}/templates/generated-sources.js.tmpl`);
            await fs.writeFile(`${dir}/schema.js`, generatedHeader + output);
        },
    );

    pbts.main(
        [
            `${dir}/schema.js`,
        ],
        async (err: Error|null, output?: string) => {
            if (err) {
                throw err;
            }
            const generatedHeader = await fs.readFile(`${__dirname}/templates/generated-sources.js.tmpl`);
            await fs.writeFile(`${dir}/schema.d.ts`, generatedHeader + output);
        },
    );
}
