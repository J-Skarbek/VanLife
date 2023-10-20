import React from "react";
import { useParams } from "react-router-dom";

function HostVanDetails() {

  const params = useParams();

  const [hostVanDetails, setHostVanDetails] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((vanData) => setHostVanDetails(vanData.vans))
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <>
      <div className="main flex justify-center bg-tan">
        <div className="container pl-4 py-8 xl:pr-56 w-screen max-w-7xl flex flex-col justify-start">
          {
             hostVanDetails ? (
              <div className="van-details flex">
                <div className="image-container w-1/5">
                  <img src={`${hostVanDetails.imageUrl}`} alt={hostVanDetails.name} className="cover"/>
                </div>
                <div className="host-van-info flex flex-col justify-center px-4">
                  <span className="van-type">{hostVanDetails.type}</span>
                  <h2 className="font-bold text-4xl my-4">{hostVanDetails.name}</h2>
                  <p className="van-price font-semibold">{`$${hostVanDetails.price}/day`}</p>
                </div>
              </div>
            ) : <h2 className="loading">Loading...</h2> 
          }
        </div>
      </div>
    </>
  )
}

export default HostVanDetails;