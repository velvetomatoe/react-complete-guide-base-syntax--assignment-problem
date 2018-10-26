import React from "react";
import "./UserInput.css";

const style = {
  backgroundColor: "white",
  font: "inherit",
  border: "1px solid blue",
  padding: "8px",
  cursor: "pointer"
};

const userInput = props => {
  return (
    <div className="UserInput">
      <input
        type="text"
        style={style}
        onChange={props.changed}
        value={props.username}
      />
    </div>
  );
};

export default userInput;
