import React from "react";
import "../../App.css";
import "./HeroHeading.css";
import { Spring } from "react-spring/renderprops";

const HeroHeading = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -50 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 1200, duration: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <h1>I design &amp; build responsive UI for the web.</h1>
        </div>
      )}
    </Spring>
  );
};

export default HeroHeading;
