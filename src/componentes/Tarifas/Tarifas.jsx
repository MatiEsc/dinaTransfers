import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "./Tarifas.css";

const Tarifas = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa la animación una vez cuando el componente entra en vista
    threshold: 0.2, // Define cuánto del componente debe ser visible para activar la animación
  });

  const openWhatsAppChat = () => {
    const phoneNumber = "1167626764"; // Número de teléfono en formato internacional sin el signo +
    const message =
      "Hola, estoy interesado en reservar un traslado. Por favor, contáctenme con más detalles."; // Mensaje predefinido
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div
      id="tarifas"
      className={`servicios ${inView ? "animate__animated animate__fadeInUpBig" : ""}`}
      ref={ref}
    >
      <section className="titulos">
        <h2 className="h2Servicios">TARIFAS</h2>
      </section>

      <div className="cuadros-container">
        <section className="cuadro-tarifas">
          <h3 className="titulo-cuadro">Traslado desde el Aeropuerto de Bariloche</h3>
          <p className="info-cuadro">Máximo 8 pasajeros y equipaje</p>
          <ul className="lista-tarifas">
            <li>Centro - $77.000.-</li>
            <li>Hasta el km 10 - $115.500.-</li>
            <li>Hotel Llao Llao - $143.000.-</li>
            <li>Cerro Catedral - $143.000.-</li>
            <li>Villa La Angostura - $231.000.-</li>
            <li>El Bolson - $291.500.-</li>
            <li>San Martin de los Andes (ciudad) - $484.000.-</li>
          </ul>
        </section>

        <section className="cuadro-tarifas">
          <h3 className="titulo-cuadro">Otros Traslados por Tramo</h3>
          <ul className="lista-tarifas">
            <li>Del Hotel Llao Llao al Centro - $82.500.-</li>
            <li>Del Cerro Catedral al Centro - $82.500.-</li>
            <li>Del Cerro Catedral al Hotel Llao Llao - $82.500.-</li>
            <li>Del Centro a Bahía López, Cerro Llao Llao, Villa Tacul - $93.500.-</li>
          </ul>
        </section>
      </div>

      <section className="aviso-adicional">
        <p>
          * Los servicios nocturnos entre las 21hs y las 7hs tienen un adicional del 20%. No incluye
          guía. Tarifario vigente desde el 1 de octubre de 2024 al 31 de diciembre de 2024.
        </p>
      </section>

      <section className="cta-container">
        <button className="botonContacto" onClick={openWhatsAppChat}>
          Reserva tu traslado
        </button>
        <p className="consulta">
          ¿Necesitas información adicional o tienes otras consultas?{" "}
          <a className="link-consulta" onClick={openWhatsAppChat}>
            Haz clic aquí
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Tarifas;
