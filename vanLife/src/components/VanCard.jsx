import React from "react";

function VanCard(props) {

  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.imageUrl} alt={props.name} />
    </div>
  )
}

export default VanCard;