import React from "react";
import "../../App.css";
import "../Projects/Projects.css";
import ProjectImages from "../../data/images.json";

function Projects() {
  return (
    <section className="section-project">
      <div className="column">
        {ProjectImages.map((id, img) => {
          return <img key={id} src={img} alt="img" />;
        })}
      </div>
    </section>
  );
}

export default Projects;
