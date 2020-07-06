import React from "react";
import "../../App.css";
import "../Projects/Projects.css";
import ProjectImages from "../../data/images.json";

function Projects() {
  return (
    <section className="section-project" id="projects">
      <p className="bg-project">Projects</p>
      <h2>projects.</h2>
      <div className="column">
        {ProjectImages.map((imageSrc) => {
          return <img src={imageSrc.img} alt="img" />;
        })}
      </div>
    </section>
  );
}

export default Projects;
