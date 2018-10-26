import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="userOutput">
      <p>Username: {props.username}</p>
      <p>Test 2</p>
    </div>
  );
};

export default userOutput;
