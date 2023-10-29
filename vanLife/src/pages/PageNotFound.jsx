import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  
  return (
    <div className="main flex justify-center pb-4 w-screen max-w-7x min-h-screen">
      <div className="flex flex-col pb-4 w-screen max-w-7xl">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="/">Return to Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound;