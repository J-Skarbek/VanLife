import React, { Suspense } from "react";
import { 
  Link,
  useLoaderData,
  defer,
  Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

function HostVans() {

  // const vans = useLoaderData();
  const dataPromise = useLoaderData();

  // const hostVansEls = vans.map(van => (
  //     <Link
  //       to={van.id}
  //       key={van.id}
  //       className="host-van-link-wrapper"
  //     >
  //       <div className="host-van-single flex bg-tan my-4 drop-shadow-md" key={van.id}>
  //         <div className="image-container w-1/5">
  //           <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
  //         </div>
  //         <div className="host-van-info flex flex-col justify-center px-4">
  //             <h3>{van.name}</h3>
  //             <p>${van.price}/day</p>
  //         </div>
  //       </div>
  //     </Link>
  // ))

  // function renderHostVans(vans) {
  //   const hostVansEls = vans.map(van => {
  //     return (
  //       <Link
  //         to={van.id}
  //         key={van.id}
  //         className="host-van-link-wrapper"
  //       >
  //         <div className="host-van-single flex bg-tan my-4 drop-shadow-md" key={van.id}>
  //           <div className="image-container w-1/5">
  //             <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
  //           </div>
  //           <div className="host-van-info flex flex-col justify-center px-4">
  //             <h3>{van.name}</h3>
  //             <p>${van.price}/day</p>
  //           </div>
  //         </div>
  //       </Link>
  //     )
  //   });

  //   return (
  //     <section>
  //       {hostVansEls}
  //     </section>
  //   )
  // }

  return (
    <section>
      <div className="main flex justify-center">
        <div className="container pl-4 py-8 xl:pr-56 w-screen max-w-7xl flex flex-col justify-start text-white">
          <h1 className="host-vans-title">Your listed vans</h1>
          <div className="host-vans-list">
            <Suspense fallback={<h2 className="text-black">Loading Your Vans...</h2>}>
              <Await resolve={dataPromise.vans}>
                {(loadedHostVans) => {
                  const test = loadedHostVans.map(van => {
                    return (
                      <Link
                        to={van.id}
                        key={van.id}
                        className="host-van-link-wrapper"
                      >
                        <div className="host-van-single flex bg-tan my-4 drop-shadow-md" key={van.id}>
                          <div className="image-container w-1/5">
                            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                          </div>
                          <div className="host-van-info flex flex-col justify-center px-4">
                            <h3>{van.name}</h3>
                            <p>${van.price}/day</p>
                          </div>
                        </div>
                      </Link>
                    )
                  });
                return (
                  <section>
                    {test}
                  </section>
                )
              }}               
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HostVans;

