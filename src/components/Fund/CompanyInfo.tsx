import React from 'react';
import { Fund } from '../../types/fundTypes';

/**
 * Interface to represent the props of the CompanyInfo component.
 *
 * - fund: The fund to display the company information.
 */
interface CompanyInfoProps {
    fund: Fund;
}

/**
 * Displays the company information of a fund.
 * The company information includes the depositary society, the management society,
 * the CNV code, the CAFCI code, the management society code, and the depositary society code.
 *
 * @param {CompanyInfoProps} props - The props for the CompanyInfo component.
 * @returns {JSX.Element} a div element with the company information of the fund.
 */
const CompanyInfo: React.FC<CompanyInfoProps> = ({ fund }) => {
    return (
        <div className="fund-card-table">
            <h3>Información de la Sociedad</h3>
            <p><strong>Sociedad Depositaria:</strong> {fund.sociedadDepositaria}</p>
            <p><strong>Sociedad Gerente:</strong> {fund.sociedadGerente}</p>
            <p><strong>Código CNV:</strong> {fund.codigoCNV}</p>
            <p><strong>Código CAFCI:</strong> {fund.codigoCAFCI}</p>
            <p><strong>Código Soc. Gte.:</strong> {fund.codigoSocGte}</p>
            <p><strong>Código Soc. Dep.:</strong> {fund.codigoSocDep}</p>
        </div>
    );
};

export default CompanyInfo;
