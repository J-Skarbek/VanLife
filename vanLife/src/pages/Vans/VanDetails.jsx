import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";

function VanDetails() {

  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((vanData) => setVan(vanData.vans))
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <div className="main flex justify-center pb-4 w-screen max-w-7x min-h-screen">
      <div className="flex flex-col pb-4 w-screen max-w-7xl">
        {van ? (
          <div className="van-details">
            <img src={`${van.imageUrl}`} alt={van.name} className="mb-12 w-screen h-3/4 xl:h-2/4 object-cover max-w-7xl"/>
            <p className="van-type">{van.type}</p>
            <h2 className="bold text-2xl">{van.name}</h2>
            <p className="description">{van.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        ) : <h2 className="loading">Loading...</h2> }
      </div>
    </div>
  )
}

export default VanDetails;