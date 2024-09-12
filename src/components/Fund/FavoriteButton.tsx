import React from "react";
import { FaStar } from "react-icons/fa";

/**
 * Interface that defines the properties required by the FavoriteButton component.
 *
 * - isFavorite: A boolean value that indicates if the fund is a favorite.
 */
interface FavoriteButtonProps {
    isFavorite: boolean;
    onToggleFavorite: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
}

/**
 * Renders a button that allows the user to add or remove a fund from their favorites.
 *
 * @param {FavoriteButtonProps} props The props for the FavoriteButton component.
 * @returns {JSX.Element} a button element that allows the user to add or remove a fund from their favorites.
 */
const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onToggleFavorite }: FavoriteButtonProps): JSX.Element => {
    return (
        <button
            onClick={onToggleFavorite}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onToggleFavorite(e);
                }
            }}
            style={{ cursor: "pointer", background: "none", border: "none", padding: 0 }}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            <FaStar color={isFavorite ? "gold" : "gray"} />
        </button>
    );
};

export default FavoriteButton;
