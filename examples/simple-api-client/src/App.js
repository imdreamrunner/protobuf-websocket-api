import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { initConnection } from "protobuf-websocket-api-client";
import { login } from "protobuf-websocket-api/project/user";

initConnection("ws://localhost:23333");

class App extends Component {
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

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
          [name]: value
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div>
              Username: <input name="username" onChange={this.handleInputChange} />
          </div>
          <div>
              Password: <input name="password" type="password" onChange={this.handleInputChange} />
          </div>
          <button onClick={this.userLogin}>Test Login</button>
        </div>
      </div>
    );
  }
}

export default App;
