import React from "react";
import Button from "./Button";

function VanCard(props) {

  return (
    <div className="van-card flex flex-col w-80 basis-5/12 m-4">
      <img src={props.imageUrl} alt={props.name} className="object-cover rounded-xl" />
      <div className="van-details flex justify-between text-xl text-black font-semibold my-2">
        <h2>{props.name}</h2>
        <p className="van-rates">${props.price}<br></br>/day</p>
      </div>
      <Button 
        text="Book your Van"
        color="brandOrange"
        classes="w-1/2 my-2"
        // Will need to pass more props and link values in eventually
      />
    </div>
  )
}

export default VanCard;