import React from "react";

function Button(props) {

  return (
    <button type="button" className={`bg-${props.color}`}>{props.text}</button>
  )
}

export default Button;