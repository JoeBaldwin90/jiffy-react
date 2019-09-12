import React, { Component } from "react";
import Header from "./header";
import UserHint from "./user-hint";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      hintText: "",
      loading: false,
      gifs: []
    };
  }

  searchGiphy = inputValue => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=Is7P13H7y3yqxijMkU17rfd24X4abCPC&q=${inputValue}&limit=20&offset=0&rating=PG&lang=en`
    )
      .then(response => response.json())
      .then(data => {
        this.setState((prevState, props) => ({
          ...prevState,
          loading: true,
          gifs: data.data.map(gif => {
            return gif.images.original.mp4;
          })
        }));
      })
      .catch(error => {
        alert("Search failed. Try entering a different search term");
      });
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: inputValue,
      hintText:
        inputValue.length > 2 ? `Hit enter to search for ${inputValue}` : ""
    }));
  };

  handleEnterKeyPress = event => {
    const inputValue = event.target.value;
    if (inputValue.length > 2 && event.key === "Enter") {
      console.log("Searching for " + inputValue);
      this.searchGiphy(inputValue);
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
