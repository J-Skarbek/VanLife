import React from "react";
import { useRouteError } from "react-router-dom";

function VansRouteError() {
  const error = useRouteError();
  console.log(error)
  return (
    <>
      <h1>There was an error here.</h1>
      <p>{error.message}</p>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
    </>

  )
}

export default VansRouteError;