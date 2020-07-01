import React from "react";
import "../../App.css";
import "../TechSkills/TechSkills.css";

function TechSkills() {
  return (
    <section className="section-skills">
      <p className="bg-skills">Tech Skills</p>
      <h2>tech skills.</h2>
      <div className="skills-container">
        <div className="skills-inner">
          <h3>Languages</h3>
          <ul className="languages">
            <li>- HTML5</li>
            <li>- CSS3</li>
            <li>- JavaScript</li>
            <li>- Java</li>
            <li>- Python *</li>
            <li>- PHP *</li>
            <li>- MySQL</li>
          </ul>
        </div>
        <div className="skills-inner">
          <h3>Frameworks / Libraries</h3>
          <ul className="languages">
            <li>- React</li>
            <li>- Node.js</li>
            <li>- Express.js</li>
            <li>- MongoDB</li>
            <li>- jQuery</li>
            <li>- Bootstrap</li>
            <li>- Flask *</li>
            <li>- Vue.js *</li>
          </ul>
        </div>
        <div className="skills-inner">
          <h3>Software / Tools</h3>
          <ul className="languages">
            <li>- Adobe Photoshop</li>
            <li>- Adobe XD</li>
            <li>- Adobe InDesign *</li>
            <li>- Git / Github / Gitflow</li>
            <li>- Android Studio</li>
            <li>- Visual Studio</li>
            <li>- Developer Tool</li>
            <li>- npm</li>
          </ul>
        </div>
        <div className="skills-inner">
          <h3>Operating System</h3>
          <ul className="languages">
            <li>- Mac OS X</li>
            <li>- Windows</li>
            <li>- Linux</li>
          </ul>
        </div>
      </div>
      <p className="familiarity">* familiarity</p>
    </section>
  );
}

export default TechSkills;
