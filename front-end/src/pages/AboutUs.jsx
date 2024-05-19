import React from "react";

function AboutUs() {
  return (
    <>
      <div className="app">
        <div className="panel">
          <img
            className="background-image"
            src="\src\Assets\LandingPage\hadi3.avif"
            alt="Background"
          />
          <div className="container">
            <h2 className="title font-semibold">
              Biomimicry:
              <br />
              Learning From
              <br />
              The Genius of Nature
            </h2>
            <button className="btn"> Learn More </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
