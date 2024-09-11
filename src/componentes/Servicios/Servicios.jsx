import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { MdOutlineLocalAirport } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { FaSkiing } from "react-icons/fa";

import "./Servicios.css"; // Asegúrate de que este archivo CSS esté importado correctamente

const Servicios = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa la animación una vez cuando el componente entra en vista
    threshold: 0.2, // Define cuánto del componente debe ser visible para activar la animación
  });

  return (
    <div
      id="servicios"
      className={`servicios ${inView ? "animate__animated animate__fadeInUpBig" : ""}`}
      ref={ref}
    >
      <section className="titulos">
        <h2 className="h2Servicios">Nuestros Servicios</h2>
      </section>
      <section className="card-container">
        <div className="card">
          <MdOutlineLocalAirport className="icon-servicios" />
          <h3 className="h3ServicioTitulo">TRASLADO AEROPUERTO</h3>
          <p>
            Servicio puerta a puerta desde y hacia el aeropuerto o el lugar que elijas, garantizando
            puntualidad y comodidad en cada viaje.
          </p>
        </div>

        <div className="card">
          <GrGroup className="icon-servicios" />
          <h3 className="h3ServicioTitulo">SERVICIOS PARA GRUPOS</h3>
          <p>
            Vehículos espaciosos y cómodos para grupos grandes, eventos especiales y excursiones
            corporativas.
          </p>
        </div>

        <div className="card">
          <FaSkiing className="icon-servicios" />
          <h3 className="h3ServicioTitulo">TRASLADOS A CENTROS DE ESQUÍ</h3>
          <p>
            Te llevamos a los mejores centros de esquí de la región con todo tu equipamiento de
            forma segura y puntual.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
