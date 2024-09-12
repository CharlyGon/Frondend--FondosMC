import React from "react";
import FooterColumn from "./FooterColumn";
import "../../styles/Footer.css";

/**
 * Renders the footer of the application with multiple columns.
 *
 * @returns {JSX.Element} A footer with navigation links and copyright information.
 */
const Footer: React.FC = (): JSX.Element => {
    const productLinks = [
        { label: "Actualizaciones", href: "/actualizaciones" },
        { label: "API", href: "/api" },
        { label: "Precios", href: "/precios" },
    ];

    const companyLinks = [
        { label: "Acerca de nosotros", href: "/acerca" },
        { label: "Términos de uso", href: "/terminos" },
        { label: "Privacidad", href: "/privacidad" },
    ];

    const supportLinks = [
        { label: "FAQs", href: "/faqs" },
        { label: "Contacto", href: "/contacto" },
        { label: "Glosario", href: "/glosario" },
    ];

    const socialLinks = [
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <FooterColumn title="Productos" links={productLinks} />
                <FooterColumn title="Empresa" links={companyLinks} />
                <FooterColumn title="Soporte" links={supportLinks} />
                <FooterColumn title="Redes Sociales" links={socialLinks} />
            </div>
            <div className="footer-bottom">
                <p>© 2024 The Room G & M. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
