import React from "react";
import { NavLink } from "react-router-dom";

function HostDashBoardSubnavigation() {

  return (
    <>
      <nav>
        <NavLink 
          to="pricing" 
          className="mx-2"
          
        >Pricing
        </NavLink>
        <NavLink 
          to="details" 
          className="mx-2"
          
        >Details
        </NavLink>
        <NavLink 
          to="photos" 
          className="mx-2"
          
        >Photos
        </NavLink>
      </nav>
    </>
  )
}

export default HostDashBoardSubnavigation;