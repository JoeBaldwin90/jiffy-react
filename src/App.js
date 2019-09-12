import React, { Component } from "react";
import Header from "./header";

class App extends Component {
  
  handleChange = event => {
    const { value } = event.target
    if (value.length > 2) {
      console.log(value);
    }
  } 

  handleKeyPress = event => {
    const { value } = event.target;
    if (value.length > 2 && event.key === 'Enter') {
      console.log("search for " + value);
    }
  }

  render() {
    return (
      <div className="page">
        <Header />

        <div className="search grid">
          <input
            className="input grid-item"
            placeholder="type something"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}

export default App;
