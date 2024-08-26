import NavBar from "./componentes/NavBar/NavBar";
import Presentacion from "./componentes/Presentacion/Presentacion";
import Servicios from "./componentes/Servicios/Servicios";
import Nosotros from "./componentes/Nosotros/Nosotros";
import Experiencia from "./componentes/Experiencia/Experiencia";
import Contacto from "./componentes/Contacto/Contacto";
import Footer from "./componentes/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Presentacion />
        <Servicios />
        <Nosotros />
        <Experiencia />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default App;
