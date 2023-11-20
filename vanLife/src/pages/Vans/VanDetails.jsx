import React, { Suspense } from "react";
import { 
  Link, 
  useLocation, 
  useLoaderData,
  defer,
  Await
} from "react-router-dom";
import Button from "../../components/Button";
import { getVan } from "../../api";

export function loader({ params }) {
  return defer({ van: getVan(params.id) })
}

function VanDetails() {
  const location = useLocation();
  const dataPromise  = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  function renderVanDetails(van) {
    return (
      van ? (
        <div className="van-details">
          <img src={`${van.imageUrl}`} alt={van.name} className="mb-12 w-screen h-3/4 xl:h-2/4 object-cover max-w-7xl"/>
          <p className="van-type">{van.type}</p>
          <h2 className="bold text-2xl">{van.name}</h2>
          <p className="description">{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : <h2 className="loading">Loading...</h2>
    )
  }

  return (
    <div className="main flex justify-center pb-4 w-screen max-w-7x min-h-screen">
      <div className="flex flex-col pb-4 w-screen max-w-7xl">
        <Link
          to={`..${search}`}
          relative="path"
          className="back-button"
        >&larr;<span>Back to {type} vans</span>
        </Link>
        <Suspense fallback={<h2 className="text-black">Loading Van...</h2>}>
          <Await resolve={dataPromise.van}>
           {renderVanDetails}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export default VanDetails;