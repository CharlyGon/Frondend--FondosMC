import React from 'react';
import '../styles/Header.css';
import logo from '../assets/images/logo.webp';

/**
 * Renders the header of the application.
 * The header contains a navigation menu and login buttons.
 *
 * @returns {JSX.Element} a header element with a navigation menu and login buttons.
 */
const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-left">
        <nav>
          <ul className="menu">
            <li className="menu-item logo-item">
              <img src={logo} alt="Logo" className="logo-image" />
            </li>
            <li className="menu-item dropdown">
              Fondos
              <ul className="dropdown-menu">
                <li className="dropdown-item">Ranking</li>
                <li className="dropdown-item">Clasificación</li>
                <li className="dropdown-item">Cantidad de cuotapartes	</li>
              </ul>
            </li>
            <li className="menu-item">Productos</li>
            <li className="menu-item">Aprender</li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <button className="btn">Iniciar sesión</button>
        <button className="btn register">Regístrate</button>
      </div>
    </header>
  );
};

export default Header;
