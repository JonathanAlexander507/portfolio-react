import React, { useState } from "react";
import { scrollToSection } from "../utils/scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
        <div className="logo">
          <img src="/images/Logo.png" alt="Logo" />
        </div>
      <nav className="nav">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <button onClick={() => scrollToSection("home")}>Inicio</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")}>Sobre Mí</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("skills")}>Habilidades</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("project")}>
              Mis Proyectos
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contacto</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
