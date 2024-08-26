import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { GrMail } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { BiLogoFacebookSquare } from "react-icons/bi";
import validator from "validator";

import "./Contacto.css";

const Contacto = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!validator.isLength(formData.name, { min: 1 })) {
      newErrors.name = "El nombre es requerido.";
    }
    if (!validator.isEmail(formData.email)) {
      newErrors.email = "El email no es válido.";
    }
    if (formData.phone && !validator.isMobilePhone(formData.phone, "any", { strictMode: false })) {
      newErrors.phone = "El teléfono no es válido.";
    }
    if (!validator.isLength(formData.message, { min: 1 })) {
      newErrors.message = "El mensaje es requerido.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí puedes enviar los datos al backend
      console.log("Datos enviados:", formData);
    }
  };

  return (
    <div
      id="contacto"
      className={`containerContacto ${inView ? "animate__animated animate__fadeIn" : ""}`}
      ref={ref}
    >
      <div className={`textoFormulario ${inView ? "animate__animated animate__fadeInLeft" : ""}`}>
        <h2 className="h2Contacto">Contáctanos</h2>
        <p>
          Estamos aquí para hacer tu viaje por la Patagonia lo más seguro, cómodo y placentero
          posible. No dudes en contactarnos para cualquier consulta o reserva.
          <br />
          <GrMail className="icon-contacto" />
          info@transfersdina.com
          <br />
          <GrInstagram className="icon-contacto" />
          INSTAGRAM
          <br />
          <BiLogoFacebookSquare className="icon-contacto" />
          FACEBOOK
        </p>
      </div>
      <div className={`formulario ${inView ? "animate__animated animate__fadeInRight" : ""}`}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+541155667788"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Deja tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit" className="botonContacto">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
