import React from "react";
import { scrollToSection } from "../utils/scroll";
const Home = () => {
  return (
    <section id="home" className="home-layout">
      <div className="profile-container">
        <img
          src="/images/profile.png"
          alt="Jonathan Brown"
          className="profile-pic"
        />
      </div>
      <div className="home-text">
        <span>Programador Fullstack Jr</span>
        <h1>Jonathan Brown</h1>
        <p>
          Me gusta la programación web, el trabajo en equipo, aprender de los mas experimentados y cosas nuevas que me ayuden a mejorar mis habilidades
        </p>
        <button onClick={() => scrollToSection("projects")} className="btn">
          Ver Mis Proyectos
        </button>
        <button
      onClick={() => window.open("/cv.pdf", "_blank")}
      className="btn"
    >
      Ver mi CV
    </button>
      </div>
    </section>
  );
};

export default Home;
