import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Workout Store",
      description:
        "E-commerce enfocado en ropa deportiva y accesorios de entrenamiento. Un trabajo hecho con algunos compañeros ya que era el proyecto final.",
      previewImage: "/images/previews/workout_preview.png", // Ruta de la imagen de previa
      projectLink: "https://grupo1-workout-507-store.onrender.com/",
      githubLink:
        "https://github.com/AlcibiadesAR/Grupo1-WORKOUT-507-STORE.git", // Cambia al enlace de GitHub
    },
    {
      title: "Mercado Liebre",
      description:
        "Maquetacion de la popular tienda online mercado libre, con autorización de los administradores de la pagina para replicarlo",
      previewImage: "/images/previews/rabbit_preview.png",
      projectLink: "https://proyecto-rabbit-market.vercel.app/", // Aquí agregarás el enlace más tarde
      githubLink:
        "https://github.com/JonathanAlexander507/proyecto_rabbit_market.git", // Aquí agregarás el enlace más tarde
    },
    {
      title: "Landing Page",
      description:
        "Maquetación de una landing page sencilla como practica de una maquetación web",
      previewImage: "/images/previews/landing_page_preview.png",
      projectLink: "https://mylandingpage-khaki.vercel.app/#",
      githubLink:
        "https://github.com/JonathanAlexander507/Proyecto-final-de-html-y-css.git",
    },
    {
      title: "Game Store 507",
      description:
        "Diseño y desarrollo de un E-commerce de productos de tecnologia, usando todas las herramientas aprendidas para su completo desarrollo. mi proyecto final para aprobar el curso de fullstack",
      previewImage: "/images/previews/game_store_preview.png",
      projectLink: "#",
      githubLink:
        "https://github.com/JonathanAlexander507/DPFS_Jonathan_Brown.git",
    },
  ];

  return (
    <section id="projects">
      <h2 className="proyects_title">Mis Proyectos:</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.previewImage} alt={`${project.title} preview`} />
            <h3>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
