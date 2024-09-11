import { useState, useEffect } from "react";
import { GiMountains } from "react-icons/gi";

import "./NavBar.css";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const toggleButton = document.getElementById("_toggle");
    const itemsContainer = document.getElementById("_items");

    const handleToggleClick = () => {
      itemsContainer.classList.toggle("open");
      toggleButton.classList.toggle("close");
    };

    toggleButton.addEventListener("click", handleToggleClick);

    return () => {
      toggleButton.removeEventListener("click", handleToggleClick);
    };
  }, []);

  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav id="navbar">
        <div className="logo-container">
          <a href="#home" className="logoLink" onClick={(e) => handleClick(e, "home")}>
            {isMobile ? (
              <div className="logo-text-container">
                <GiMountains className="logo-icon" />
                <h1 className="allura-regular">Dina Transfers</h1>
              </div>
            ) : (
              <div className="logo-text-container">
                <p className="allura-regular">Dina Transfers</p>
                <GiMountains className="logo-icon" />
              </div>
            )}
          </a>
        </div>
        <ul className={`nav_items ${menuVisible ? "open" : ""}`} id="_items">
          <li>
            <a href="#servicios" onClick={(e) => handleClick(e, "servicios")}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#tarifas" onClick={(e) => handleClick(e, "tarifas")}>
              Tarifas
            </a>
          </li>
          <li>
            <a href="#nosotros" onClick={(e) => handleClick(e, "nosotros")}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#testimonios" onClick={(e) => handleClick(e, "testimonios")}>
              Testimonios
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={(e) => handleClick(e, "contacto")}>
              Contacto
            </a>
          </li>
        </ul>

        <div
          className={`nav_toggle ${menuVisible ? "close" : ""}`}
          id="_toggle"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
