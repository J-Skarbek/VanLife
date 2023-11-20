import React, { Suspense } from "react";
import { 
  Outlet,
  Link, 
  NavLink, 
  useLoaderData,
  defer,
  Await 
} from "react-router-dom";
import { getVan } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return defer({ hostVanDetails: getVan(params.id) })
}

export default function HostVanDetails() {
  const dataPromise = useLoaderData();
  console.log(dataPromise)

  const customLinkStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#16161"
  }

  function renderHostVanDetails(hostVanDetails) {
    return (
      <>
        { hostVanDetails ? (
          <div className="hostVanDetails-details flex">
            <div className="image-container w-1/5">
              <img src={`${hostVanDetails.imageUrl}`} alt={hostVanDetails.name} className="cover"/>
            </div>
            <div className="host-hostVanDetails-info flex flex-col justify-center px-4">
              <span className="hostVanDetails-type">{hostVanDetails.type}</span>
              <h2 className="font-bold text-4xl my-4">{hostVanDetails.name}</h2>
              <p className="hostVanDetails-price font-semibold">{`$${hostVanDetails.price}/day`}</p>
            </div>
          </div>
        ) : <h2 className="loading">Loading...</h2>
      }
        <div className="hosthostVanDetails-details-navbar my-4">
          <>
            <nav>
            <NavLink 
                to="."
                end
                className="mx-2"
                style={({isActive}) => isActive ? customLinkStyles : null}        
              >Details
              </NavLink>
              <NavLink 
                to="pricing" 
                className="mx-2"
                style={({isActive}) => isActive ? customLinkStyles : null}         
              >Pricing
              </NavLink>
              <NavLink 
                to="photos" 
                className="mx-2"
                style={({isActive}) => isActive ? customLinkStyles : null}         
              >Photos
              </NavLink>
            </nav>
          </>
          <Outlet context={{ hostVanDetails }}/>
        </div>
    </>
  )}
  
  return (
    <>
      <div className="main flex justify-center bg-tan">
        <div className="container pl-4 py-8 xl:pr-56 w-screen max-w-7xl flex flex-col justify-start">
          <section className="mb-4">
            <Link
              to=".."
              relative="path"
              className="back-button"
            >&larr;<span>Back to all Vans</span>
            </Link>
          </section>
          <Suspense fallback={<h2 className="text-black">Loading Van...</h2>}>
            <Await resolve={dataPromise.hostVanDetails}>
              {renderHostVanDetails}
            </Await>
          </Suspense>
        </div>
      </div>
    </>
  )
}