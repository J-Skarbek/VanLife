import React from "react";
import { 
  Outlet,
  Link, 
  NavLink, 
  useLoaderData
  defer,
  Await 
} from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  // getHostVans(params.id)
  return defer({ van: getHostVans(params.id) })
}

function HostVanDetails() {
  const dataPromise = useLoaderData();

  const customLinkStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#16161"
  }

  // const hostVanDetails = useLoaderData();
  
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
          {/* <HostDashBoardSubnavigation /> */}
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
        </div>
      </div>
    </>
  )
}

export default HostVanDetails;

//old component below:

// function HostVanDetails() {

//   const customLinkStyles = {
//     fontWeight: "bold",
//     textDecoration: "underline",
//     color: "#16161"
//   }

//   const hostVanDetails = useLoaderData();
  
//   return (
//     <>
//       <div className="main flex justify-center bg-tan">
//         <div className="container pl-4 py-8 xl:pr-56 w-screen max-w-7xl flex flex-col justify-start">
//           <section className="mb-4">
//             <Link
//               to=".."
//               relative="path"
//               className="back-button"
//             >&larr;<span>Back to all vans</span>
//             </Link>
//           </section>
//           {
//              hostVanDetails ? (
//               <div className="van-details flex">
//                 <div className="image-container w-1/5">
//                   <img src={`${hostVanDetails.imageUrl}`} alt={hostVanDetails.name} className="cover"/>
//                 </div>
//                 <div className="host-van-info flex flex-col justify-center px-4">
//                   <span className="van-type">{hostVanDetails.type}</span>
//                   <h2 className="font-bold text-4xl my-4">{hostVanDetails.name}</h2>
//                   <p className="van-price font-semibold">{`$${hostVanDetails.price}/day`}</p>
//                 </div>
//               </div>
//             ) : <h2 className="loading">Loading...</h2> 
//           }
//         <div className="hostvan-details-navbar my-4">
//           {/* <HostDashBoardSubnavigation /> */}
//           <>
//             <nav>
//             <NavLink 
//                 to="."
//                 end
//                 className="mx-2"
//                 style={({isActive}) => isActive ? customLinkStyles : null}        
//               >Details
//               </NavLink>
//               <NavLink 
//                 to="pricing" 
//                 className="mx-2"
//                 style={({isActive}) => isActive ? customLinkStyles : null}         
//               >Pricing
//               </NavLink>
//               <NavLink 
//                 to="photos" 
//                 className="mx-2"
//                 style={({isActive}) => isActive ? customLinkStyles : null}         
//               >Photos
//               </NavLink>
//             </nav>
//           </>
//           <Outlet context={{ hostVanDetails }}/>
//         </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default HostVanDetails;