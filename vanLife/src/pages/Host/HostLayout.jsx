import React from "react";
import { Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <>
      <h1>This will stay.</h1>
      <Outlet />
      <h2>And so will this.</h2>
    </>
  );
}

export default HostLayout;