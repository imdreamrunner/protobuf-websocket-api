/*
 * !!! GENERATED SOURCE !!!
 * ========================
 *
 * This file is a generated source code by protobuf-websocket-api.
 * You may find more information at https://github.com/imdreamrunner/protobuf-websocket-api.
 *
 */

/* eslint-disable */
/* tslint:disable */

import runServer from "protobuf-websocket-api-server";
import * as schema from "../schema";

const handlers = {

    "core": require("./api/core"),

    "user": require("./api/user"),

};

const endpoints = [

    {
        moduleName: "core",
        apiName: "transformPerson",
        requestSchema: schema.org.simple.api.Person,
        responseSchema: schema.org.simple.api.Person,
    },

    {
        moduleName: "user",
        apiName: "transformPerson2",
        requestSchema: schema.org.simple.api.Person,
        responseSchema: schema.org.simple.api.Person,
    },

    {
        moduleName: "user",
        apiName: "transformPerson3",
        requestSchema: schema.org.simple.api.Person,
        responseSchema: schema.org.simple.api.Person,
    },

];

runServer(handlers, endpoints);
