import React from "react";
import { NavLink } from "react-router-dom";

function HostDashBoardSubnavigation() {

  const customLinkStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#16161"
  }

  return (
    <>
      <nav>
      <NavLink 
          to="."
          end
          className="mx-2"
          style={({isActive}) => isActive ? customLinkStyles : null}        
        >Details
        </NavLink>
        <NavLink 
          to="pricing" 
          className="mx-2"
          style={({isActive}) => isActive ? customLinkStyles : null}         
        >Pricing
        </NavLink>
        <NavLink 
          to="photos" 
          className="mx-2"
          style={({isActive}) => isActive ? customLinkStyles : null}         
        >Photos
        </NavLink>
      </nav>
    </>
  )
}

export default HostDashBoardSubnavigation;