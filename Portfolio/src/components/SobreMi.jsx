import React from "react";

const Project = ({ title, description }) => (
  <div className="sobre-mi">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="container">
        <h2>Sobre Mí</h2>
        <p>
          Hola, soy Evelyn Ramirez, una desarolladora con pasión por crear
          nuevos proyectos innovadores. Tengo experiencia en lenguajes como
          phyton, js, c++ y html. Me encanta aprender cada dia un poco mas sobre
          el mundo de la tecnologia y demas.
        </p>
        <p>
          Mi objetivo es superarme y aprender cada dia mas en este mundo. Por lo
          tanto, estoy siempre buscando nuevas oportunidades.¡No dudes en
          contactarme para cualquier proyecto o colaboración!
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
