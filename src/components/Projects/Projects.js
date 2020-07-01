import React from "react";
import "../../App.css";
import "../Projects/Projects.css";
import ProjectImages from "../../data/project_images.json";

function Projects() {
  return (
    <section className="section-project">
      <div className="column">
        {ProjectImages.map((imgDetail, index) => {
          return <img src={imgDetail.img} alt="img" />;
        })}
      </div>
    </section>
  );
}

export default Projects;
