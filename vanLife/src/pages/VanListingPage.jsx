import React from "react";

function VanListings() {

  const [vans, setVans] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/vans", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error(error));
  }, []);

  // console.log(vans[0]);

  const vanElements = vans.map(van => {
    return (
      <div key={van.id}>
        <h3>{van.name}</h3>
      </div>
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