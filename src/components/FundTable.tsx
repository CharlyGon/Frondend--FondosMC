import React from 'react';
import FundRow from './FundRow';
import { Fund } from '../types/fundTypes';

/**
 * Props for the FundTable component.
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
    <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Fondo</th>
        <th>Clasificación</th>
        <th>Fecha</th>
        <th>Valor (mil cuotapartes)</th>
        <th>Variación cuotaparte %</th>
        <th>Patrimonio</th>
      </tr>
    </thead>
    <tbody>
      {funds.map((fund, index) => (
        <FundRow key={fund.id} fund={fund} index={index + 1} />
      ))}
    </tbody>
  </table>
  );
};

export default FundTable;
