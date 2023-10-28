import React from "react";
import VanCard from "../../components/VanCard";
import Button from "../../components/Button";
import { useSearchParams, Link } from "react-router-dom";

function VanListings() {

  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  console.log(typeFilter);

  React.useEffect(() => {
    fetch("/api/vans", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error(error));
  }, [])

  const displayedVans = typeFilter
  ? vans.filter(van => van.type.toLowerCase() === typeFilter)
  : vans

  const vanElements = displayedVans.map(van => {
    return (
      <VanCard 
        key={van.id}
        id={van.id}
        name={van.name}
        imageUrl={van.imageUrl}
        price={van.price}
        type={van.type}
        description={van.description}
        search={searchParams}
      />
    )
  })

  // console.log(vans)

  return (
    <div className="main flex justify-center">
      <div className="container pl-4 py-8 xl:pr-56 w-screen max-w-7xl flex flex-col justify-start text-white">
        <h1 className="text-black font-bold mb-4">Explore Our Van Options</h1>
        <div className="van-filters-container flex my-4">
          <button className="w-1/2 mx-2 text-black" onClick={() => setSearchParams({type: "simple"})}>Simple</button>
          <button className="w-1/2 mx-2 text-black" onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
          <button className="w-1/2 mx-2 text-black" onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
          { typeFilter ? (
            <button 
              className="w-1/2 mx-2 text-black" 
              onClick={() => setSearchParams({})}
            >Clear Filters</button> 
            ) : null }
          {/* <button className="w-1/2 mx-2 text-black" onClick={() => setSearchParams({})}>Clear Filters</button> */}
          {/* <Link 
            to="?type=simple"
            className="w-1/2 mx-2"          
          >Simple
          </Link>
          <Link 
            to="?type=rugged"
            className="w-1/2 mx-2"          
          >Rugged
          </Link>
          <Link 
            to="?type=luxury" 
            className="w-1/2 mx-2"                    
          >Luxury
          </Link>
          <Link 
            to="." 
            className="w-1/2 mx-2"                  
          >All Vans
          </Link> */}

          {/* These four button elemenets may be reinstated later */}
          {/* <Button 
            text="Simple"
            color="brandOrange"
            classes="w-1/2 mx-2"
          />
          <Button 
            text="Rugged"
            color="brandOrange"
            classes="w-1/2 mx-2"
          />
          <Button 
            text="Luxury"
            color="brandOrange"
            classes="w-1/2 mx-2"
          />
          <Button 
            text="Clear Filters"
            // color="brandBlack"
            classes="w-1/2 text-black mx-2"
          /> */}
        </div>
        <div className="vansGrid grid grid-cols-2 auto-rows-auto w-5/6">
        {vanElements}
        </div>
      </div>
    </div>
  )
}

export default VanListings;