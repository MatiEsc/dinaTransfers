import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "./Nosotros.css";

const Nosotros = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      id="nosotros"
      className={`container ${inView ? "animate__animated animate__fadeIn" : ""}`}
      ref={ref}
    >
      <div className={`imagen ${inView ? "animate__animated animate__fadeInLeft" : ""}`}>
        <img src="/img/logotipo.webp" alt="Logo Empresa" />
      </div>
      <div className={`texto ${inView ? "animate__animated animate__fadeInRight" : ""}`}>
        <h2 className="h2Nosotros">Sobre Dina Transfers</h2>
        <p>
          Dina Transfers es el lugar donde la confianza y la excelencia en el servicio se encuentran
          en cada viaje.
          <br />
          Entendemos que cada trayecto es una experiencia única que merece un servicio impecable.
          Nuestro compromiso es ofrecer traslados seguros y confortables, con una atención al
          detalle y un profundo conocimiento de la región que enriquecen tu viaje.
          <br />
          Contamos con un equipo de conductores quienes combinan profesionalismo con amabilidad para
          garantizar tu tranquilidad en cada trayecto. Nuestra misión es asegurarnos de que cada
          viaje con nosotros sea una experiencia memorable, caracterizada por la seguridad y el
          confort.
        </p>
        <button className="botonContacto">CONTÁCTANOS</button>
      </div>
    </div>
  );
};

export default Nosotros;
