import React from "react";

const UserHint = ({ loading, hintText }) => (
  <div className="user-hint">
    {loading ? (
      <img src={require("./images/loader.svg")} className="block mx-auto" />
    ) : (
      hintText
    )}
  </div>
);

export default UserHint;