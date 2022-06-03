import React from "react";
import "../../App.css";
import "../../components/HeroImage/HeroImage.css";
import profilePhoto from "../../images/jak-profile-2021.jpg";
import { Spring } from "react-spring/renderprops";

function HeroImage() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -50 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 1200, duration: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <div className="display-flex">
            <img src={profilePhoto} alt="Jak's profile" />
            <div className="intro-wrapper">
              <p className="intro">
                Hi,<br></br>I’m Jak and I'm highly driven and passionate
                software engineer with an emphasis on UI design, web
                applications and Front-End Development.
              </p>
              <div className="btn-wrapper">
                <a className="btn-projects" href="#projects">
                  Projects
                </a>
                <a className="btn-contact" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default HeroImage;
