import React from "react";
import VanCard from "../components/VanCard";

function VanListings() {

  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error(error));
  }, []);


  const vanElements = vans.map(van => {
    return (
      <VanCard 
        key={van.id}
        name={van.name}
        imageUrl={van.imageUrl}
      />
    )
  })

  return (
    <div className="main flex justify-center bg-home-hero bg-center bg-no-repeat bg-cover min-h-screen">
      <div className="container pl-4 py-8 pr-56 w-screen max-w-7xl flex flex-col justify-start text-white">
        <h1>This will be the van listing page.</h1>
        {vanElements}
      </div>
    </div>
  )
}

export default VanListings;