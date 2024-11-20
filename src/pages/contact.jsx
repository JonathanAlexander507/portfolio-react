import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contáctame</h2>
      <div className="contact-icons">
        {/* WhatsApp */}
        <a
          href="https://wa.me/50760505119" // Reemplaza "1234567890" con tu número en formato internacional
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/jonathan_delacruz507?igsh=MTJnZm1kYmFweGNsYw==" // Cambia "tuusuario" por tu nombre de usuario
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jonathan-brown-248b59304" // Cambia "tuusuario" por tu nombre de usuario
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/JonathanAlexander507" // Cambia "tuusuario" por tu nombre de usuario
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
