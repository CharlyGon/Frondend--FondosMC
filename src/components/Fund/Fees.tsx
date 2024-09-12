import React from "react";
import { Fund } from "../../types/fundTypes";

/**
 * Interface to represent the props of the Fees component.
 *
 * - fund: The fund to display the fees and commissions information.
 */
interface FeesProps {
    fund: Fund;
}

/**
 * Displays the fees and commissions information of a fund.
 *
 * @param {FeesProps} props - The props for the Fees component.
 * @returns {JSX.Element} a div element with the fees and commissions information of the fund.
 */
const Fees: React.FC<FeesProps> = ({ fund }: FeesProps): JSX.Element => {
    return (
        <div className="fund-card-table">
            <h3>Comisiones y Honorarios</h3>
            <p><strong>Índice de MM:</strong> {fund.indiceMM}</p>
            <p><strong>Comisión Ingreso:</strong> {fund.comisionIngreso}</p>
            <p><strong>Honorarios Adm. SG:</strong> {fund.honorariosAdmSG}</p>
            <p><strong>Honorarios Adm. SD:</strong> {fund.honorariosAdmSD}</p>
            <p><strong>Gastos Ord. Gestión:</strong> {fund.gastosOrdGestion}</p>
            <p><strong>Comisión Rescate:</strong> {fund.comisionRescate}</p>
            <p><strong>Comisión Transferencia:</strong> {fund.comisionTransferencia}</p>
            <p><strong>Honorarios Éxito:</strong> {fund.honorariosExito}</p>
        </div>
    );
};

export default Fees;
