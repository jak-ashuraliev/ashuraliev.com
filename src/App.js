import React from "react";
import "./App.css";
import HeroHeading from "./components/HeroHeading/HeroHeading";
import Projects from "./components/Projects/Projects";
import TechSkills from "./components/TechSkills/TechSkills";
import Contact from "./components/Contact/Contact";
import Logo from "./components/Logo/Logo";
import HeroImage from "./components/HeroImage/HeroImage";

function App() {
  return (
    <div className="App">
      <Logo />
      <HeroHeading />
      <HeroImage />
      <Projects />
      <TechSkills />
      <Contact />
    </div>
  );
}

export default App;
