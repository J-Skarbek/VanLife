import React from "react";
import { useOutletContext } from "react-router-dom";

function HostsVanPhotos() {

  const { hostVanDetails } = useOutletContext();
  
  return (
    <>
     <h1>this is the van details for the host/photos route</h1>
     <div className="image-container w-1/4">
      <img src={hostVanDetails.imageUrl} alt={hostVanDetails.name}></img>
     </div>
    </>
  )
}

export default HostsVanPhotos;