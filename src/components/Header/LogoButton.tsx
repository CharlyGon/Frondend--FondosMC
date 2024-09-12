import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';

/**
 * Interface for the properties required by the LogoButton component.
 *
 * - altText: string
 */
interface LogoButtonProps {
  altText: string;
}

/**
 * Button that displays the logo and navigates to the homepage when clicked.
 *
 * @param {LogoButtonProps} props The props for the LogoButton component.
 * @param {string} props.altText The alt text for the logo image.
 *
 * @returns {JSX.Element} a button element with the logo image.
 */
const LogoButton: React.FC<LogoButtonProps> = ({ altText }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <button onClick={handleLogoClick}
      className="logo-button"
      aria-label="Go to homepage"
      style={{
        background: 'none',
        border: 'none',
        padding: 0
      }}
    >
      <img
        src={logo}
        alt={altText}
        className="logo-image"
        style={{ cursor: 'pointer' }}
      />
    </button>
  );
};

export default LogoButton;
