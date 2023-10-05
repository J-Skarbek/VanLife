import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

export default NavBar;