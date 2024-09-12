import React from "react";
import LogoButton from "./LogoButton";
import Menu from "./Menu";
import "../../styles/Header.css";
import AuthButtons from "./AuthButtons";

/**
 * Header component that displays the logo, menu, and authentication buttons.
 *
 * @returns {JSX.Element} Header component
 */
const Header: React.FC = (): JSX.Element => {
  const menuItems = [
    { label: "Fondos", subItems: ["Ranking", "Clasificación", "Cantidad de cuotapartes"] },
    { label: "Productos", subItems: ["Acciones", "Bonos", "Fondos comunes de inversión"] },
    { label: "Aprender", subItems: ["Guías", "Preguntas frecuentes", "Glosario"] },
  ];

  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleRegister = () => {
    console.log("Register clicked");
  };

  return (
    <header className="header">
      <div className="header-left">
        <LogoButton altText="Logo of the company" />
        <Menu items={menuItems} />
      </div>
      <div className="header-right">
        <AuthButtons onLogin={handleLogin} onRegister={handleRegister} />
      </div>
    </header>
  );
};

export default Header;
