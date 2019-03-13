import React, { Component } from "react";

import "./App.css";
import Image from './Image'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://images.unsplash.com/photo-1552273582-07e2a8a8de70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"}/>
      </div>
    );
  }
}

export default App;
