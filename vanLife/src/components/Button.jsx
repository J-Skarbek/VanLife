import React from "react";

function Button(props) {

  return (
    <button type="button" className={`bg-${props.color} ${props.classes}`}>{props.text}</button>
  )
}

export default Button;