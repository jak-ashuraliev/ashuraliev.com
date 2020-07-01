import React from "react";
import "./App.css";
import "./components/HeroSection/HeroSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";
import TechSkills from "./components/TechSkills/TechSkills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Projects />
      <TechSkills />
      <Contact />
    </div>
  );
}

export default App;
