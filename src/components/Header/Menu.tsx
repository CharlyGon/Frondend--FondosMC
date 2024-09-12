import React from 'react';

/**
 * Interface for the properties required by the Menu component.
 *
 * - items: { label: string; subItems?: string[] }[]
 */
interface MenuProps {
  items: { label: string; subItems?: string[] }[];
}

/**
 * Menu component that renders a list of items with optional sub-items.
 *
 * @param {MenuProps} props - The props of the component
 * @returns {JSX.Element} Menu component
 */
const Menu: React.FC<MenuProps> = ({ items }: MenuProps): JSX.Element => {
  return (
    <ul className="menu">
      {items.map((item, index) => (
        <li key={`${item.label}-${index}`} className="menu-item">
          {item.label}
          {item.subItems && (
            <ul className="dropdown-menu">
              {item.subItems.map((subItem, subIndex) => (
                <li key={`${index}-${subIndex}`} className="dropdown-item">{subItem}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
