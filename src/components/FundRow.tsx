import React from 'react';
import { Fund } from '../types/fundTypes';
import { useNavigate } from 'react-router-dom';

/**
 * Props for the FundRow component.
 * @param {Fund} fund The fund to display in the row.
 * @param {number} index The index of the fund in the list.
 */
interface FundRowProps {
  fund: Fund;
  index: number;
}

/**
 * Renders a row in the fund table.
 * @param {FundRowProps} props The props for the FundRow component.
 * @param {Fund} props.fund The fund to display in the row.
 * @param {number} props.index The index of the fund in the list.
 *
 * @returns {JSX.Element} a table row element with data for the fund.
 */
const FundRow: React.FC<FundRowProps> = ({ fund, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/fund/${fund.id}`);
  };

  return (
    <tr onClick={handleClick} style={{ cursor: 'pointer' }}>
      <td>{index}</td>
      <td>{fund.fondo}</td>
      <td>{fund.clasificacion}</td>
      <td>{fund.fecha}</td>
      <td>{fund.valorMilCuotapartes}</td>
      <td>{fund.variacionCuotapartePorcentaje}%</td>
      <td>{fund.patrimonio}</td>
    </tr>
  );
};

export default FundRow;
