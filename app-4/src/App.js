import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      username: "",
    };
  }

  handleName = (e) => {
    this.setState({ username: e });
  };

  handlePass = (e) => {
    this.setState({ password: e });
  };

  handleSubmit = () => {
    alert(
      "Username: " +
        " " +
        this.state.username +
        ", " +
        "Password: " +
        this.state.password,
    );
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            this.handleName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            this.handlePass(e.target.value);
          }}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default App;
