import React from "react";

const Header = ({ hasResults, clearSearch }) => (
  <div className="header">
    {hasResults ? (
      <button onClick={clearSearch}>
        <img
          alt="Press button to clear search"
          src={require("./images/close-icon.svg")}
        />
      </button>
    ) : (
      <h1 className="title">Jiffy</h1>
    )}
  </div>
);

export default Header;
