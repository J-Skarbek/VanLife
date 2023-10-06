import React from "react";

function Button(props) {
  return (
    <button type="button" className="bg-brandOrange">{props.text}</button>
  )
}

export default Button;