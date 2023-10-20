import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import HostDashBoardSubnavigation from "./HostDashBoardSubnavigation";

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
          <section className="mb-4">
            <Link
              to=".."
              relative="path"
              className="back-button"
            >&larr;<span>Back to all vans</span>
            </Link>
          </section>
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
        <div className="hostvan-details-navbar my-4">
          <HostDashBoardSubnavigation />
          <Outlet context={[hostVanDetails, setHostVanDetails]}/>
        </div>
        </div>
      </div>
    </>
  )
}

export default HostVanDetails;