import { FaWhatsapp } from "react-icons/fa";

import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const openWhatsAppChat = () => {
    const phoneNumber = "1167626764"; // Número de teléfono en formato internacional sin el signo +
    const message =
      "Hola, estoy interesado en reservar un traslado. Por favor, contáctenme con más detalles."; // Mensaje predefinido
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsAppChat}>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsAppButton;
