import React, { useState } from "react";
import "./Faq.css"; // Asegúrate de crear este archivo CSS

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openWhatsAppChat = () => {
    const phoneNumber = "1167626764"; // Número de teléfono en formato internacional sin el signo +
    const message =
      "Hola, estoy interesado en reservar un traslado. Por favor, contáctenme con más detalles."; // Mensaje predefinido
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  const faqs = [
    {
      question: "¿Cómo hago una reserva?",
      answer: (
        <div>
          Para hacer una reserva, simplemente envianos un mensaje haciendo click{" "}
          <button className="link-consulta" onClick={openWhatsAppChat}>
            aqui
          </button>{" "}
          o dirígete a nuestra sección de Contacto y completa el formulario con los detalles de tu
          viaje.
        </div>
      ),
    },
    {
      question: "¿Qué hacer si necesito cambiar mi reserva?",
      answer: (
        <div>
          "Puedes modificar tu reserva enviandonos un mensaje haciendo click{" "}
          <button className="link-consulta" onClick={openWhatsAppChat}>
            aqui
          </button>{" "}
          o dirígete a nuestra sección de Contacto y completa el formulario con los detalles de tu
          reserva.",
        </div>
      ),
    },
    {
      question: "¿Ofrecen servicios para grupos grandes?",
      answer:
        "Sí, tenemos opciones para grupos grandes. Por favor, envíanos un mensaje con tu consulta, detallando fecha y hora del viaje y cantidad de personas.",
    },
    {
      question: "¿Cómo puedo cancelar una reserva?",
      answer:
        "Para poder cancelar una reserva, envíanos un mensaje haciendo click o completa el formulario con los detalles de tu reserva.",
    },
    {
      question: "¿Qué sucede si mi vuelo se retrasa?",
      answer:
        "Nosotros monitoreamos los horarios de los vuelos. Si hay un retraso, ajustaremos tu traslado en consecuencia para garantizar que estés cubierto.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="faq">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h3>{faq.question}</h3>
              <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
