#! /usr/bin/env node

"use strict";

import generateLocalApi from "./generate-local-api";

const args = process.argv.slice(2);

switch (args[0]) {
    default:
        generateLocalApi();
}
