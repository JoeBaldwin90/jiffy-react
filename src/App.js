import React, { Component } from "react";
import Header from "./Header";
import Gif from "./Gif";
import UserHint from "./user-hint";

const randomChoice = gifArray => {
  const randomIndex = Math.floor(Math.random() * gifArray.length);
  return gifArray[randomIndex];
};

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
    let { searchTerm } = this.state;

    this.setState({
      loading: true
    });

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=Is7P13H7y3yqxijMkU17rfd24X4abCPC&q=${inputValue}&limit=50&offset=0&rating=PG&lang=en`
    )
      .then(response => response.json())
      .then(data => {
        if (!data.data.length) {
          throw Error(
            `No gifs found for "${searchTerm}". Try another search term.`
          );
        }

        const gifArray = data.data.map(gif => {
          return gif.images;
        });

        const randomGif = randomChoice(gifArray);

        this.setState((prevState, props) => ({
          ...prevState,
          gifs: [...prevState.gifs, randomGif],
          loading: false,
          hintText: `Hit enter to see more ${searchTerm}`
        }));
      })
      .catch(error => {
        this.setState((prevState, props) => ({
          ...prevState,
          hintText: `${error.message}`,
          loading: false
        }));
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

  clearSearch = () => {
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: "",
      hintText: "",
      gifs: []
    }));
    this.searchInput.focus();
  };

  render() {
    const { searchTerm, gifs } = this.state;
    const hasResults = gifs.length;
    return (
      <div className="page">
        <Header clearSearch={this.clearSearch} hasResults={hasResults} />

        <div className="search grid">
          {gifs.map(gif => (
            <Gif {...gif} />
          ))}
          <input
            className="input grid-item"
            placeholder="type something"
            onChange={this.handleChange}
            onKeyPress={this.handleEnterKeyPress}
            value={searchTerm}
            ref={input => {
              this.searchInput = input
            }}
          />
        </div>

        <UserHint {...this.state} />
      </div>
    );
  }
}

export default App;
