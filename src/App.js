import React from "react";
import "./App.css";
import HeroHeading from "./components/HeroHeading/HeroHeading";
import Projects from "./components/Projects/Projects";
import TechSkills from "./components/TechSkills/TechSkills";
import Logo from "./components/Logo/Logo";
import HeroImage from "./components/HeroImage/HeroImage";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <Logo />
      <HeroHeading />
      <HeroImage />
      <Projects />
      <TechSkills />
      <ContactForm />
    </div>
  );
}

export default App;
