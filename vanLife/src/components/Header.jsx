import React from "react";
import { Link, NavLink } from "react-router-dom";


function Header() {

  const customLinkStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <header>
      <div className="nav-container bg-tan w-screen flex justify-center">
        <div className="nav-bar p-4 w-screen max-w-7xl flex justify-between items-center align-center">
          <div className="logo">
            <h1 className="font-black uppercase">&#35;VanLife</h1>
          </div>
          <nav className="font-semibold capitalize flex w-64 justify-between">
            <NavLink 
              to="/" 
              className="mx-2"
              // end
              style={({isActive}) => isActive ? customLinkStyles : null}
            >
              Home
            </NavLink>
            <NavLink 
              to="about" 
              className="mx-2"
              // end
              style={({isActive}) => isActive ? customLinkStyles : null}
            >
              About
            </NavLink>
            <NavLink 
              to="van-listings" 
              className="mx-2"
              // end
              style={({isActive}) => isActive ? customLinkStyles : null}
            >
              Vans
            </NavLink>
            <NavLink 
              to="host"
              className="mx-2"
              // end
              style={({isActive}) => isActive ? customLinkStyles : null}
            >
              Host
            </NavLink>
            <NavLink 
              to="login"
            >
              <img src="/userCircle.svg" alt="user-avatar" />
            </NavLink>

          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;