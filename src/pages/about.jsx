import React from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Nodejs",
    "ExpressJs",
    "MySQL",
    "React",
    "ViteJs",
    "Bootstrap",
    "GitHub",
    "ChatGPT",
    "Blender",
  ];

  return (
    <section id="about" className="fade-in">
      <h2>Sobre Mí</h2>
      <p id="parrafo_about">
        "¡Hola! Soy un apasionado de la programación web, especializado en el
        desarrollo de aplicaciones utilizando herramientas modernas como React,
        Express, Node.js y MySQL. Me encanta crear experiencias digitales
        funcionales y atractivas, combinando habilidades técnicas con un enfoque
        creativo. Además, disfruto practicar el diseño de objetos
        en 3D utilizando Blender, lo que me permite explorar mi creatividad
        desde otra perspectiva. Valoro el compañerismo y el trabajo en equipo,
        ya que creo que compartir conocimientos y apoyar a los demás fortalece
        cualquier proyecto. Me esfuerzo por ser siempre respetuoso y
        profesional, manteniendo un ambiente de colaboración positivo y
        efectivo."
      </p>
      <h3>Habilidades:</h3>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="skill-box">
              <img
                src={`/images/logos/${skill.toLowerCase()}.svg`}
                alt={skill}
              />
              <p>{skill}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
