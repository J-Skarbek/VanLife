import React from "react";
import Button from "./Button";

function VanCard(props) {

  return (
    <div className="van-card flex flex-col w-80">
      <img src={props.imageUrl} alt={props.name} />
      <div className="van-details flex justify-between">
        <h2>{props.name}</h2>
        <p className="van-rates">$100/day</p> 
        {/* Change the rate to use a prop for the rate */}
      </div>
      <Button 
        text="Book your Van"
        // Will need to pass more props and link values in eventually
      />
    </div>
  )
}

export default VanCard;