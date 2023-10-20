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
      <div className="main flex justify-center">
        <div className="container pl-4 py-8 xl:pr-56 w-screen max-w-7xl flex flex-col justify-start">
          {
             hostVanDetails ? (
              <div className="van-details">
                <img src={`${hostVanDetails.imageUrl}`} alt={hostVanDetails.name} className="mb-12 w-screen h-3/4 xl:h-2/4 object-cover max-w-7xl"/>
                <p className="van-type">{hostVanDetails.type}</p>
                <h2 className="bold text-2xl">{hostVanDetails.name}</h2>
                <p className="description">{hostVanDetails.description}</p>
                <button className="link-button">Rent this van</button>
              </div>
            ) : <h2 className="loading">Loading...</h2> 
          }
        </div>
      </div>
    </>
  )
}

export default HostVanDetails;