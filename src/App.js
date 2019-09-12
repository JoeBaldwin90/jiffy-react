import React, { Component } from "react";
import Header from "./header";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange = event => {
    const inputValue = event.target.value; 
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: inputValue
    }));
    if (inputValue.length > 2) {
      // Do something
    }
  };

  handleEnterKeyPress = event => {
    const inputValue = event.target.value;
    if (inputValue.length > 2 && event.key === "Enter") {
      console.log("Searching for " + inputValue);
    }
  };

  render() {
    const {searchTerm} = this.state
    return (
      <div className="page">
        <Header />

        <div className="search grid">
          <input
            className="input grid-item"
            placeholder="type something"
            onChange={this.handleChange}
            onKeyPress={this.handleEnterKeyPress}
            value={searchTerm}
          />
        </div>
      </div>
    );
  }
}

export default App;
