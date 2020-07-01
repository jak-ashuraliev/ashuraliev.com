import React from "react";
import "./App.css";
import "./components/HeroSection/HeroSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Projects />
    </div>
  );
}

export default App;
