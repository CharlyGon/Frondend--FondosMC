import React from 'react';
import FundRow from './FundRow';
import { Fund } from '../../types/fundTypes';
import '../../styles/FundTable.css';

/**
 * Interface for the properties required by the FundTable component.
 *
 * - funds: An array of fund objects that will be displayed in the table.
 */
interface FundTableProps {
  funds: Fund[];
}

/**
 * Renders a table displaying a list of funds, each row showing various properties
 * of the fund such as its classification, value, market share, and more.
 * @param {FundTableProps} props The props for the FundTable component.
 * @param {Fund[]} props.funds The list of funds to display in the table.
 *
 * @returns {JSX.Element} a table element with rows for each fund in the list.
 */
const FundTable: React.FC<FundTableProps> = ({ funds }: FundTableProps): JSX.Element => {
  return (
    <div className="fund-table">

      {/* Card for the table headers */}
      <div className="fund-card fund-header">
        <h4>#</h4>
        <h4>Fondo</h4>
        <h4>Clasificación</h4>
        <h4>Fecha</h4>
        <h4>Valor (mil cuotapartes)</h4>
        <h4>Variación cuotaparte %</h4>
        <h4>Patrimonio</h4>
      </div>

      {/* Cards for each fund row */}
      {funds.map((fund, index) => (
        <FundRow key={fund.id} fund={fund} index={index + 1} />
      ))}
    </div>
  );
};

export default React.memo(FundTable);
