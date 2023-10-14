import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container bg-tan w-screen flex justify-center">
      <div className="nav-bar p-4 w-screen max-w-7xl flex justify-between items-center align-center">
        <div className="logo">
          <h1 className="font-black uppercase">&#35;VanLife</h1>
        </div>
        <nav className="font-semibold capitalize flex w-36 justify-between">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/van-listings">Vans</Link>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;