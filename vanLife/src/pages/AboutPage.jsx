import React from "react";
import Button from "../components/Button";

function AboutPage() {
  return (
    <div className="main flex justify-center pb-4 w-screen max-w-7x min-h-screen">
      <div className="flex flex-col pb-4 w-screen max-w-7xl">
        <div className="heroImg mb-12 w-screen max-w-7xl bg-about-hero bg-center bg-no-repeat bg-cover">
          <div className="spacer w-screen max-w-7xl h-96"></div>
        </div>
        <div className="pageContent p-4">
          <h1 className="text-3xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra &#128521;)</p>
          <p className="py-8">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="pageContent p-4">
        <div className="bg-brandOrange rounded-lg drop-shadow-2xl pageContent px-16 py-8">
          <p className="text-2xl font-bold">Your destination is waiting.<br></br>Your van is ready.</p>
          <Button className="text-xl font-bold" text={'Explore our vans'}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;