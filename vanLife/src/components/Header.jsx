import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="nav-container bg-tan w-screen flex justify-center">
        <div className="nav-bar p-4 w-screen max-w-7xl flex justify-between items-center align-center">
          <div className="logo">
            <h1 className="font-black uppercase">&#35;VanLife</h1>
          </div>
          <nav className="font-semibold capitalize flex w-36 justify-between">
            <NavLink 
              to="/" 
              // className={`mx-2 ${({isActive}) => isActive ? "italic" : ""}`}
              // className="mx-2"
              className={({isActive}) => isActive ? "italic" : ""}
            >
              Home
            </NavLink>
            <NavLink 
              to="about" 
              // className="mx-2"
              className={({isActive}) => isActive ? "italic" : ""}
            >
              About
            </NavLink>
            <NavLink 
              to="van-listings" 
              // className="mx-2"
              className={({isActive}) => isActive ? "italic" : ""}
            >
              Vans
            </NavLink>
            <NavLink 
              to="host" 
              // className="mx-2"
              className={({isActive}) => isActive ? "italic" : ""}
            >
              Host
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;