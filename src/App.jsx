import React from "react";
import "./App.css";
import HeroHeading from "./components/HeroHeading/HeroHeading";
import Projects from "./components/Projects/Projects";
import TechSkills from "./components/TechSkills/TechSkills";
import Logo from "./components/Logo/Logo";
import HeroImage from "./components/HeroImage/HeroImage";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Logo />
      <HeroHeading />
      <HeroImage />
      <Projects />
      <TechSkills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
