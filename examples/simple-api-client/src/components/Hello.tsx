import * as React from "react";
import { initConnection } from "protobuf-websocket-api-client";
import * as core from "../api/core";

export interface HelloProps { compiler: string; framework: string; }

initConnection("ws://localhost:23333");

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    async testPersonAPI() {
        console.log(await core.transformPerson({name: "Happy"}));
    }
    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <button onClick={this.testPersonAPI}>Test API</button>
            </div>
        );
    }
}
