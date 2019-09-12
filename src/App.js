import React, { Component } from "react";
import Header from "./header";
import UserHint from "./user-hint"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      hintText: ""
    };
  }

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: inputValue,
      hintText: inputValue.length > 2 ? `Hit enter to search for ${inputValue}` : ""
    }));
  };

  handleEnterKeyPress = event => {
    const inputValue = event.target.value;
    if (inputValue.length > 2 && event.key === "Enter") {
      console.log("Searching for " + inputValue);
    }
  };

  render() {
    const { searchTerm } = this.state;
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

        <UserHint {...this.state} />
      </div>
    );
  }
}

export default App;
