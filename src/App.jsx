import NavBar from "./componentes/NavBar/NavBar";
import Presentacion from "./componentes/Presentacion/Presentacion";
import Servicios from "./componentes/Servicios/Servicios";
import Nosotros from "./componentes/Nosotros/Nosotros";
import Experiencia from "./componentes/Experiencia/Experiencia";
import Contacto from "./componentes/Contacto/Contacto";
import Footer from "./componentes/Footer/Footer";
import WhatsAppButton from "./componentes/WhatsAppButton/WhatsAppButton";
import Tarifas from "./componentes/Tarifas/Tarifas";
import Faq from "./componentes/Faq/Faq";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Presentacion />
        <Servicios />
        <Tarifas />
        <Nosotros />
        <Experiencia />
        <Faq />
        <Contacto />
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
