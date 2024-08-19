import React from "react";

const Project = ({ title, description }) => (
  <div className="project">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Projects = () => {
  const projectList = [
    { title: "Proyecto 1", description: "Descripción del proyecto 1" },

    { title: "Proyecto 2", description: "Descripción del proyecto 2" },

    { title: "Proyecto 3", description: "Descripción del proyecto 3" },
  ];

  return (
    <section id="projects">
      <h2>Mis Proyectos</h2>
      {projectList.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  );
};

export default Projects;
