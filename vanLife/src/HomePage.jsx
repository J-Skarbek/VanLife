import React from "react";

function HomePage() {
  return (
    <div className="main flex justify-center bg-home-hero bg-center bg-no-repeat bg-cover min-h-screen">
      <div className="container p-4 w-screen max-w-7xl flex flex-col justify-between items-center align-center">
        <h1 className="font-extrabold text-4xl">You got the travel plans, we got the travel vans.</h1>
        <p className="font-medium text-xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      </div>
    </div>
  )
}

export default HomePage;