import React from "react";

/**
 * Interface for the properties required by the FooterColumn component.
 *
 * - title: The title of the column.
 */
interface FooterColumnProps {
    title: string;
    links: { label: string; href: string }[];
}

/**
 * Renders a column in the footer.
 *
 * @param {FooterColumnProps} props - Title and list of links for the column.
 * @returns {JSX.Element} A footer column.
 */
const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }: FooterColumnProps): JSX.Element => {
    return (
        <div className="footer-column">
            <h4>{title}</h4>
            <ul>
                {links.map((link) => (
                    <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;
