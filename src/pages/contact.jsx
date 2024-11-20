import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";



const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact_title">Contáctame</h2>
      <div className="contact-icons">
        {/* WhatsApp */}
        <a
          href="https://wa.me/50760505119"
          target="_blank"
          title="Mi Whatsapp"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/jonathan_delacruz507?igsh=MTJnZm1kYmFweGNsYw=="
          target="_blank"
          title="Mi Instagram"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jonathan-brown-248b59304"
          target="_blank"
          title="Mi LinkedIn"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/JonathanAlexander507"
          target="_blank"
          title="Mi GitHub"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=joanthanbrown1299@gmail.com"
          target="_blank"
          title="Mi Gmail"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
