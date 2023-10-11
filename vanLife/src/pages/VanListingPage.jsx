import React from "react";

function VanListings() {

  const [vanListings, setVanListings] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/vans", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setVanListings(response))
      .then((response) => console.log(response))
      .then((response) => console.log(vanListings))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>This will be the van listing page.</h1>
    </>
  )
}

export default VanListings;