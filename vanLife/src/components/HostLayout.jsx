import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {

  const customLinkStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#16161"
  }

  return (
    <>
      <nav className="host-dashboard-naviatgation">
        <NavLink 
          to="/host" 
          className="mx-2"
          end
          style={({isActive}) => isActive ? customLinkStyles : null}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/host/income" 
          className="mx-2"
          // end
          style={({isActive}) => isActive ? customLinkStyles : null}
          
        >
          Income
        </NavLink>
        <NavLink 
          to="/host/reviews" 
          className="mx-2"
          // end
          style={({isActive}) => isActive ? customLinkStyles : null}
        >
          Reviews
        </NavLink>
        <NavLink 
          to="/host/vans" 
          className="mx-2"
          // end
          style={({isActive}) => isActive ? customLinkStyles : null}
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;