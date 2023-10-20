import React from "react";
import { useOutletContext } from "react-router-dom";

function HostsVanDetails() {

  const [hostVanDetails, setHostVanDetails] = useOutletContext();

  return (
    <>
     <h1>this is the van details for the host route</h1>
    </>
  )
}

export default HostsVanDetails;