import React from "react";

function HomePage() {
  return (
    <div className="main flex justify-center bg-home-hero bg-center bg-no-repeat bg-cover min-h-screen">
      <div className="container pl-4 py-8 pr-56 w-screen max-w-7xl flex flex-col justify-start text-white">
        <h1 className="font-extrabold text-4xl">You got the travel plans,<br></br>we got the travel vans.</h1>
        <p className="font-medium text-xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button type="button">Find Your Van</button>
      </div>
    </div>
  )
}

export default HomePage;