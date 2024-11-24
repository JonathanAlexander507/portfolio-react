import React from "react";

const Skills = () => {
  const skill = [
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
    "Photoshop",
  ];

  return (
    <section id="skills" className="fade-in">
      <h2 className="skills_title">Habilidades:</h2>
      <ul className="skills">
        {skill.map((skill, index) => (
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
export default Skills;
