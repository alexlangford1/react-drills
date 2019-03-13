import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      filterString: "",
      foods: ["candy", "ice cream", "coffee", "pizza", "milk", "popcorn", "sushi"]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let foods = this.state.foods.filter((element) => element.includes(this.state.filterString)).map((element) => {
    return <h3>{element}</h3>});

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {foods}
      </div>
    );
  }
}

export default App;
