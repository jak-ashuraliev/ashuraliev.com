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
            <li>- JavaScript</li>
            <li>- Java</li>
            <li>- Python *</li>
            <li>- PHP *</li>
            <li>- MySQL</li>
            <li>- Sightly(HTL)</li>
            <li>- HTML5</li>
            <li>- CSS3</li>
          </ul>
        </div>
        <div className="skills-inner">
          <h3>Frameworks / Libraries</h3>
          <ul className="languages">
            <li>- Angular</li>
            <li>- Angular Material</li>
            <li>- React</li>
            <li>- Node.js</li>
            <li>- Express.js*</li>
            <li>- MongoDB*</li>
            <li>- jQuery</li>
            <li>- Bootstrap</li>
            <li>- Flask *</li>
            <li>- Vue.js</li>
            <li>- Selenium</li>
          </ul>
        </div>
        <div className="skills-inner">
          <h3>Software / Tools</h3>
          <ul className="languages">
            <li>- Adobe Experience Manager (AEM)</li>
            <li>- Adobe Photoshop</li>
            <li>- Adobe XD</li>
            <li>- Adobe InDesign *</li>
            <li>- Jira</li>
            <li>- Git / Github / Gitlab</li>
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
        <p className="familiarity">* familiarity</p>
      </div>
    </section>
  );
}

export default TechSkills;
