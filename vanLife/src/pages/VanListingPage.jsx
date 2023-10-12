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
    <>
      <h1>This will be the van listing page.</h1>
      {vanElements}
    </>
  )
}

export default VanListings;