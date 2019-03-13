import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [ <h1>Hi</h1>,
      <h1>My</h1>,
      <h1>Name</h1>,
      <h1>Is</h1>,
      <h1>Alex</h1>,
      <h1>My</h1>,
      <h1>Name</h1>,
      <h1>Is</h1>,
      <h1>Alex</h1>,
      ]
    }
    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to This App,<br/> Where You Can Find Out My Name</h2>
        </div>
        <p className="App-intro">
         {this.state.list}
        </p>
      </div>
    );
  }
}

export default App;
