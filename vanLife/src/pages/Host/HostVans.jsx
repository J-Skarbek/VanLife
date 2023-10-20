import React from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
      fetch("/api/host/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])

  const hostVansEls = vans.map(van => (
      <Link
        to={`/host/vans/${van.id}`}
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
  ))

  return (
      <section>
        <div className="main flex justify-center">
          <div className="container pl-4 py-8 xl:pr-56 w-screen max-w-7xl flex flex-col justify-start text-white">
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                  vans.length > 0 ? (
                    <section>
                      {hostVansEls}
                    </section>
                  ) : (
                    <h2>Loading...</h2>
                  )
                }
            </div>
          </div>
        </div>
      </section>
  )
}

export default HostVans;