import React from "react";
import "../../App.css";
import "../../components/Logo/Logo.css";
import { Spring } from "react-spring/renderprops";

const Logo = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -200 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ duration: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <p className="app-logo">
            <span className="logo-jak">Jak</span> Ashuraliev
          </p>
        </div>
      )}
    </Spring>
  );
};

export default Logo;
