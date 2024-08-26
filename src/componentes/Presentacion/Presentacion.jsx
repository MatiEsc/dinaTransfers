import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "./Presentacion.css";

function Presentacion() {
  // Hook de observación para detectar cuando el componente entra en vista
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa la animación una vez cuando el componente entra en vista
    threshold: 0.8, // Define cuánto del componente debe ser visible para activar la animación
  });

  const scrollToContacto = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="presentacion">
      <div
        className={`animated-container ${inView ? "animate__animated animate__fadeInUpBig" : ""}`}
        ref={ref} // Asigna el ref para la observación
      >
        <h1 className="moderustic-titulo">Transfers por la Patagonia</h1>
        <h2 className="moderustic-subtitulo">
          Te ofrecemos traslados confiables y cómodos <br />
          por la Patagonia
        </h2>
        <button className="botonReserva" onClick={scrollToContacto}>
          RESERVA TU TRASLADO
        </button>
      </div>
    </div>
  );
}

export default Presentacion;
