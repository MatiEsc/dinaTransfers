import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

import "./Experiencia.css";

const Experiencia = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa la animación una vez cuando el componente entra en vista
    threshold: 0.2, // Define cuánto del componente debe ser visible para activar la animación
  });

  return (
    <div
      id="testimonios"
      className={`servicios ${inView ? "animate__animated animate__fadeInUpBig" : ""}`}
      ref={ref}
    >
      <section className="titulos">
        <h2 className="h2Servicios">Lo que dicen nuestros clientes</h2>
      </section>
      <section className="card-container">
        <div className="card">
          <img src="/img/vico.webp" alt="imagen cliente" />

          <p className="pExperiencia">
            Transfers Dina hizo que nuestro viaje a Bariloche fuera inolvidable. El servicio fue
            impecable y el conductor muy amable y conocedor. ¡Altamente recomendado!
          </p>
          <h3 className="h3ServicioTitulo">VICO</h3>
        </div>

        <div className="card">
          <img src="/img/lili.webp" alt="imagen cliente" />

          <p className="pExperiencia">
            "No podríamos haber tenido una experiencia mejor en San Martín de los Andes. Transfers
            Dina ofreció un traslado cómodo y seguro. El conductor fue muy profesional y amable.
            ¡Los recomiendo sin dudarlo!"
          </p>
          <h3 className="h3ServicioTitulo">LILIANA </h3>
        </div>

        <div className="card">
          <img src="/img/gabi.webp" alt="imagen cliente" />

          <p className="pExperiencia">
            "Transfers Dina nos proporcionó un traslado excepcional en San Martín de los Andes. El
            conductor fue amigable y muy bien informado sobre la zona. La experiencia fue tan buena
            que lo recomendaré a mis amigos."
          </p>
          <h3 className="h3ServicioTitulo">GABRIEL </h3>
        </div>
      </section>
    </div>
  );
};

export default Experiencia;
