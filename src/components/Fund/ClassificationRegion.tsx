import React from "react";
import { Fund } from "../../types/fundTypes";

/**
 * Interface to represent the props of the ClassificationRegion component.
 *
 * - fund: The fund to display the classification and region information.
 */
interface ClassificationRegionProps {
    fund: Fund;
}

/**
 * Displays the classification and region information of a fund.
 * The classification and region information includes the classification code, the currency code,
 * the region code, and the horizon code.
 *
 * @param {ClassificationRegionProps} props - The props for the ClassificationRegion component.
 * @returns {JSX.Element} a div element with the classification and region information of the fund.
 */
const ClassificationRegion: React.FC<ClassificationRegionProps> = ({ fund }: ClassificationRegionProps): JSX.Element => {
    return (
        <div className="fund-card-table">
            <h3>Clasificación y Región</h3>
            <p><strong>Código de Clasificación:</strong> {fund.codigoClasificacion}</p>
            <p><strong>Código de Moneda:</strong> {fund.codigoMoneda}</p>
            <p><strong>Código de Región:</strong> {fund.codigoRegion}</p>
            <p><strong>Código de Horizonte:</strong> {fund.codigoHorizonte}</p>
        </div>
    );
};

export default ClassificationRegion;
