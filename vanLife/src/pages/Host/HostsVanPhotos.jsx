import React from "react";
import { useOutletContext } from "react-router-dom";

function HostsVanPhotos() {

  const [hostVanDetails, setHostVanDetails] = useOutletContext();

  return (
    <>
     <h1>this is the van details for the host/photos route</h1>
    </>
  )
}

export default HostsVanPhotos;