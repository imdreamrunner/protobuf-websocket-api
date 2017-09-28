import * as React from "react";
import { initConnection } from "protobuf-websocket-api-client";
import { login } from "../api/user";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface HelloState {
    username: string;
    password: string;
}

initConnection("ws://localhost:23333");

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, HelloState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: null,
            password: null
        };
    
        this.userLogin = this.userLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }

    async userLogin() {
        if (this.state.username && this.state.password) {
            const response = await login({
                username: this.state.username,
                password: this.state.password
            });
            alert(response.message);
        }
    }


    handleInputChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h1>Protobuf and WebSocket APIs on React with TypeScript!</h1>
                <div>
                    Username: <input name="username" onChange={this.handleInputChange} />
                </div>
                <div>
                    Password: <input name="password" type="password" onChange={this.handleInputChange} />
                </div>
                <button onClick={this.userLogin}>Test Login</button>
            </div>
        );
    }
}
