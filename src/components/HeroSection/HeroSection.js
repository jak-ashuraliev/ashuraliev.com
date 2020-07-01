import React from "react";
import "../../App.css";
import "../HeroSection/HeroSection.css";

import profilePhoto from "../../images/jak_profile_grayscale.jpg";

const HeroSection = () => {
  return (
    <div>
      <p className="app-logo">
        <span className="logo-jak">Jak</span> Ashuraliev
      </p>
      <h1>I design &amp; build responsive UI for the web.</h1>
      <div className="d-flex">
        <img src={profilePhoto} alt="Jak's profile" />
        <div className="intro-wrapper">
          <p className="intro">
            Hi,<br></br>I’m Jak and I'm highly driven and passionate software
            engineer with an emphasis on UI design, web applications and
            Front-End Development.
          </p>
          <div className="btn-wrapper">
            <a className="btn-projects" href="">
              Projects
            </a>
            <a className="btn-contact" href="">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
