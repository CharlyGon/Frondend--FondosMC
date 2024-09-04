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
const FundTable: React.FC<FundTableProps> = ({ funds }) => {
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
          <th>Cantidad de cuotapartes</th>
          <th>Patrimonio</th>
          <th>Market Share</th>
          <th>Sociedad Depositaria</th>
          <th>Código CNV</th>
          <th>Calificación</th>
          <th>Código CAFCI</th>
          <th>Código de Soc. Gte.</th>
          <th>Código de Soc. Dep.</th>
          <th>Sociedad Gerente</th>
          <th>Código de Clasificación</th>
          <th>Código de Moneda</th>
          <th>Código de Región</th>
          <th>Código de Horizonte</th>
          <th>Índice de MM</th>
          <th>Comisión Ingreso</th>
          <th>Honorarios Adm. SG</th>
          <th>Honorarios Adm. SD</th>
          <th>Gastos Ord. Gestión</th>
          <th>Comisión Rescate</th>
          <th>Comisión Transferencia</th>
          <th>Honorarios Éxito</th>
          <th>Moneda Fondo</th>
          <th>Plazo Liq.</th>
          <th>Decreto 596</th>
          <th>Id Fondo CAFCI Padre</th>
          <th>Id Fondo CNV Padre</th>
          <th>Tipo de Escisión</th>
          <th>Repatriación</th>
          <th>Mínimo de Inversión</th>
          <th>Actual</th>
          <th>Fecha Actual</th>
          <th>Variación %</th>
          <th>Reexp. Pesos</th>
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
