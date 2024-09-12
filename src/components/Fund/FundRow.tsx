import React, { useState } from "react";
import { Fund } from "../../types/fundTypes";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

/**
 * Interface that defines the properties required by the FundRow component.
 *
 * - fund: The specific fund object that will be displayed in this row.
 * - index: The position of the fund in the list.
 */
interface FundRowProps {
  fund: Fund;
  index: number;
}

/**
 * Handles the navigation to the specific fund's details page.
 *
 * @param {string} fundId - The ID of the fund.
 * @param {Function} navigate - The navigate function from useNavigate.
 */
const handleNavigation = (fundId: number, navigate: ReturnType<typeof useNavigate>) => {
  navigate(`/fund/${fundId}`);
};

/**
 * Renders a row in the fund table.
 * @param {FundRowProps} props The props for the FundRow component.
 * @param {Fund} props.fund The fund to display in the row.
 * @param {number} props.index The index of the fund in the list.
 *
 * @returns {JSX.Element} a table row element with data for the fund.
 */
const FundRow: React.FC<FundRowProps> = ({ fund, index }: FundRowProps): JSX.Element => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => handleNavigation(fund.id!, navigate);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      className="fund-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      type="button"
    >
      <div className="fund-row-content">
        <h4>{index}</h4>
        <h4>{fund.nombreFondo}</h4>
        <h4>{fund.clasificacion}</h4>
        <h4>{fund.fecha}</h4>
        <h4>{fund.valorMilCuotapartes}</h4>
        <h4>{fund.variacionCuotapartePorcentaje}%</h4>
        <h4>{fund.patrimonio}</h4>

        {/* Star of Favorites */}
        <FavoriteButton isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />
      </div>
    </button>
  );
};

export default React.memo(FundRow);
