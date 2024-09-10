import React from 'react';
import { Fund } from '../../types/fundTypes';
import '../../styles/FundDetailsTable.css';
import FundChart from './FundChart';
import BasicInfo from './BasicInfo';
import FundValues from './FundValues';
import CompanyInfo from './CompanyInfo';
import ClassificationRegion from './ClassificationRegion';
import Fees from './Fees';
import AdditionalInfo from './AdditionalInfo';
import CurrentState from './CurrentState';

/**
 * Interface to represent the properties required by the FundDetailsTable component.
 *
 * - fund: The fund to display the details information.
 */
interface FundDetailsTableProps {
    fund: Fund;
}
/**
 * Displays the details of a specific fund in a table format.
 * The details include basic information, fund values, society information,
 * classification and region, commissions and fees, additional information,
 * and the current state of the fund.
 *
 * @param {FundDetailsTableProps} props - The props for the FundDetailsTable component.
 * @returns {JSX.Element} a div element with the details of the fund.
 */

const FundDetailsTable: React.FC<FundDetailsTableProps> = ({ fund }: FundDetailsTableProps): JSX.Element => {
    return (
        <div className="fund-details-table-container">
            <h2>Detalles del Fondo: {fund.nombreFondo}</h2>
            <div className="card-container-table">
                <BasicInfo fund={fund} />
                <FundValues fund={fund} />
                <CompanyInfo fund={fund} />
                <ClassificationRegion fund={fund} />
                <Fees fund={fund} />
                <AdditionalInfo fund={fund} />
                <CurrentState fund={fund} />
                <div className="fund-card-table fund-chart-card">
                    <FundChart fund={fund} />
                </div>
            </div>
        </div>
    );
};

export default FundDetailsTable;
