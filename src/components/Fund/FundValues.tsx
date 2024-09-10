import React from 'react';
import { Fund } from '../../types/fundTypes';

/**
 * Interface to represent the props of the FundValues component.
 *
 * - fund: The fund to display the values information.
 */
interface FundValuesProps {
    fund: Fund;
}

/**
 * Displays the values information of a fund.
 * The values information includes the value (in thousand shares), the share variation percentage,
 * the number of shares, the equity, and the market share.
 *
 * @param {FundValuesProps} props - The props for the FundValues component.
 * @returns {JSX.Element} a div element with the values information of the fund.
 */
const FundValues: React.FC<FundValuesProps> = ({ fund }: FundValuesProps): JSX.Element => {
    return (
        <div className="fund-card-table">
            <h3>Valores del Fondo</h3>
            <p><strong>Valor (mil cuotapartes):</strong> {fund.valorMilCuotapartes}</p>
            <p><strong>Variación cuotaparte %:</strong> {fund.variacionCuotapartePorcentaje.join(', ')}</p>
            <p><strong>Cantidad de cuotapartes:</strong> {fund.cantidadCuotapartes}</p>
            <p><strong>Patrimonio:</strong> {fund.patrimonio}</p>
            <p><strong>Market Share:</strong> {fund.marketShare}</p>
        </div>
    );
};

export default FundValues;
