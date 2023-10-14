import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="nav-container bg-tan w-screen flex justify-center">
        <div className="nav-bar p-4 w-screen max-w-7xl flex justify-between items-center align-center">
          <div className="logo">
            <h1 className="font-black uppercase">&#35;VanLife</h1>
          </div>
          <nav className="font-semibold capitalize flex w-36 justify-between">
            <Link to="/" className="mx-2">Home</Link>
            <Link to="/about" className="mx-2">About</Link>
            <Link to="/van-listings" className="mx-2">Vans</Link>
            <Link to="/host" className="mx-2">Host</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;