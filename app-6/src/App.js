import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";
class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ input: e });
  }

  handleSubmit() {
    
    this.setState({
      list: [this.state.input, ...this.state.list],
      input: "",
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div className="App">
        <h1>Do Sum Stuff:</h1>
        <div>
          <input
            placeholder="Add Stuff"
            value={this.state.input}
            onChange={(e) => this.handleChange(e.target.value)}
          />
          <button onClick={this.handleSubmit}>Add</button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;
