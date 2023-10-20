import React from "react";
import { useOutletContext } from "react-router-dom";

function HostsVanPricing() {

  const [hostVanDetails, setHostVanDetails] = useOutletContext();

  return (
    <>
     <h1>this is the van details for the host Pricing route</h1>
     {/* <p className="test">{hostVanDetails}</p> */}
    </>
  )
}

export default HostsVanPricing;