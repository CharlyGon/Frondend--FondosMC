import React from "react";
import { Fund } from "../../types/fundTypes";

/**
 * Interface to represent the props of the CurrentState component.
 *
 * - fund: The fund to display the current state information.
 */
interface CurrentStateProps {
    fund: Fund;
}

/**
 * Displays the current state of a fund.
 * The current state includes the actual value, the actual date, the percentage variation,
 * and the reexpression in pesos.
 *
 * @param {CurrentStateProps} props - The props for the CurrentState component.
 * @returns {JSX.Element} a div element with the current state of the fund.
 */
const CurrentState: React.FC<CurrentStateProps> = ({ fund }: CurrentStateProps): JSX.Element => {
    return (
        <div className="fund-card-table">
            <h3>Estado Actual</h3>
            <p><strong>Actual:</strong> {fund.actual}</p>
            <p><strong>Fecha Actual:</strong> {fund.fechaActual}</p>
            <p><strong>Variación %:</strong> {fund.variacionPorcentaje}</p>
            <p><strong>Reexpresión en Pesos:</strong> {fund.reexpPesos}</p>
        </div>
    );
};

export default CurrentState;
