import React from "react";

/**
 * Interface for the properties required by the AuthButtons component.
 *
 * - onLogin: () => void
 * - onRegister: () => void
 */
interface AuthButtonsProps {
  onLogin?: () => void;
  onRegister?: () => void;
}

/**
 * Renders the login and register buttons in the header.
 *
 * @param {AuthButtonsProps} props The props for the AuthButtons component.
 * @param {() => void} props.onLogin The function to call when the login button is clicked.
 * @param {() => void} props.onRegister The function to call when the register button is clicked.
 *
 * @returns {JSX.Element} a div element with the login and register buttons.
 */
const AuthButtons: React.FC<AuthButtonsProps> = ({ onLogin, onRegister }) => {
  return (
    <div className="auth-buttons">
      <button className="btn" onClick={onLogin} aria-label="Iniciar sesión">Iniciar sesión</button>
      <button className="btn register" onClick={onRegister} aria-label="Regístrate">Regístrate</button>
    </div>
  );
};

export default AuthButtons;
