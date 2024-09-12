import React from "react";
import { Fund } from "../../types/fundTypes";

/**
 * Interface to represent the props of the AdditionalInfo component.
 *
 * - fund: The fund to display the additional information.
 */
interface AdditionalInfoProps {
    fund: Fund;
}

/**
 * Displays additional information of a fund.
 * The additional information includes the currency of the fund, the settlement term,
 * the 596 decree, the parent CAFCI fund ID, the parent CNV fund ID, the type of split,
 * the repatriation, and the minimum investment.
 *
 * @param {AdditionalInfoProps} props - The props for the AdditionalInfo component.
 * @returns {JSX.Element} a div element with the additional information of the fund.
 */
const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ fund }: AdditionalInfoProps): JSX.Element => {
    return (
        <div className="fund-card-table">
            <h3>Información Adicional</h3>
            <p><strong>Moneda del Fondo:</strong> {fund.monedaFondo}</p>
            <p><strong>Plazo de Liquidación:</strong> {fund.plazoLiq}</p>
            <p><strong>Decreto 596:</strong> {fund.decreto596}</p>
            <p><strong>Id Fondo CAFCI Padre:</strong> {fund.idFondoCAFCIPadre}</p>
            <p><strong>Id Fondo CNV Padre:</strong> {fund.idFondoCNVPadre}</p>
            <p><strong>Tipo de Escisión:</strong> {fund.tipoEscision}</p>
            <p><strong>Repatriación:</strong> {fund.repatriacion}</p>
            <p><strong>Mínimo de Inversión:</strong> {fund.minimoInversion}</p>
        </div>
    );
};

export default AdditionalInfo;
