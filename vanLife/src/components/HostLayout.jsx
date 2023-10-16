import React from "react";
import { Link, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <>
      <h1>This will stay.</h1>
      <nav className="host-dashboard-naviatgation">
        <Link to="/host" className="mx-2">Dashboard</Link>
        <Link to="income" className="mx-2">Income</Link>
        <Link to="reviews" className="mx-2">Reviews</Link>
      </nav>
      <Outlet />
      <h2>And so will this.</h2>
    </>
  );
}

export default HostLayout;