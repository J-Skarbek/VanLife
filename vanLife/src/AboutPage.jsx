import React from "react";
import aboutHero from "/public/hero-images/aboutPage-heroImg.jpg"

function AboutPage() {
  return (
    <div className="main flex flex-col justify-center">
      <div className="container p-4 w-screen max-w-7xl flex justify-between items-center align-center">
        <div className="heroImg flex justify-center bg-about-hero">
          {/* <img src={aboutHero} alt="About the Van Life" /> */}
          <div className="spacer w-screen h-96"></div>
        </div>

      </div>
      <div className="pageContent">
        <h1 className="text-3xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra &#128521;).</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
    </div>
  )
}

export default AboutPage;