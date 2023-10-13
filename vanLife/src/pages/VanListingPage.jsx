import React from "react";
import VanCard from "../components/VanCard";
import Button from "../components/Button";

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
    <div className="main flex justify-center">
      <div className="container pl-4 py-8 pr-56 w-screen max-w-7xl flex flex-col justify-start text-white">
        <h1 className="text-black font-bold mb-4">Explore Our Van Options</h1>
        <div className="van-filters-container flex">
          <Button 
            text="Simple"
            color="brandBlack"
            classes="w-1/2"
          />
          <Button 
            text="Rugged"
            color="brandBlack"
            classes="w-1/2"
          />
          <Button 
            text="Luxury"
            color="brandBlack"
            classes="w-1/2"
          />
          <Button 
            text="Clear Filters"
            // color="brandBlack"
            classes="w-1/2 text-black"
          />
        </div>
        {vanElements}
      </div>
    </div>
  )
}

export default VanListings;