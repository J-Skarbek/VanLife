import React from "react";
import { useOutletContext } from "react-router-dom";

function HostsVanDetails() {

  const { hostVanDetails } = useOutletContext();

  console.log(hostVanDetails)

  return (
    <>
     <h1>this is the van details for the host route</h1>
     <p className="description">{hostVanDetails.description}</p>
    </>
  )
}

export default HostsVanDetails;