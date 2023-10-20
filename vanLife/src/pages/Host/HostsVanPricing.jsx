import React from "react";
import { useOutletContext } from "react-router-dom";

function HostsVanPricing() {

  const { hostVanDetails } = useOutletContext();

  return (
    <>
     <h1>this is the van details for the host Pricing route</h1>
     <p className="pricing">${hostVanDetails.price}/day</p>
    </>
  )
}

export default HostsVanPricing;