import React from "react";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import p4 from "../assets/project4.png";

function Projects() {
  const projectData = [
    { img: p1, link: "https://ethicore360.com", alt: "Ethicore360 Project" },
    { img: p2, link: "https://handsofgoldny.com", alt: "Hands of Gold NY" },
    { img: p3, link: "https://github.com/Priya162011/BloodForYoulive123", alt: "BloodForYou" },
    { img: p4, link: "https://github.com/Priya162011/BloodForYoulive123", alt: "Alukas" },
  ];

  return (
    <div className="container-fluid projects-section py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      
      <div className="row g-4">
        {projectData.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-3 text-center ">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <img src={project.img} alt={project.alt} className="img-fluid project-img rounded shadow-sm" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
