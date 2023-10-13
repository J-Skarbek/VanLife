import React from "react";
import Button from "./Button";

function VanCard(props) {

  return (
    <div className="van-card flex flex-col w-80 basis-5/12 m-4 p-4">
      <img src={props.imageUrl} alt={props.name} className="object-cover rounded-xl" />
      <div className="van-details flex justify-between text-black">
        <h2>{props.name}</h2>
        <p className="van-rates">$100/day</p> 
        {/* Change the rate to use a prop for the rate */}
      </div>
      <Button 
        text="Book your Van"
        color="brandBlack"
        classes="w-1/2"
        // Will need to pass more props and link values in eventually
      />
    </div>
  )
}

export default VanCard;