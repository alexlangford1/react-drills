import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      output: '',
    };
  }

  changeHandle = (e) => {
    this.setState({ output: e });
  };

  render() {
    return (
      <div>
        <input
          style={{ margin: 200 }}
          type="text"
          
          onChange={e =>  this.changeHandle(e.target.value)}
          placeholder="Type Here"
        />
        <h3>{this.state.output}</h3>
      </div>
    );
  }
}

export default App;
