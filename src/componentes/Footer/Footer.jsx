import React from "react";
import "./Footer.css"; // Asegúrate de tener este archivo CSS creado

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Dina Transfers. Explorando la Patagonia con seguridad y
        confort. Creado por{" "}
        <a
          href="https://www.linkedin.com/in/matias-escobar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matías Escobar
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
