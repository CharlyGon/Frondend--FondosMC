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
      <td>{fund.cantidadCuotapartes}</td>
      <td>{fund.patrimonio}</td>
      <td>{fund.marketShare}</td>
      <td>{fund.sociedadDepositaria}</td>
      <td>{fund.codigoCNV}</td>
      <td>{fund.calificacion}</td>
      <td>{fund.codigoCAFCI}</td>
      <td>{fund.codigoSocGte}</td>
      <td>{fund.codigoSocDep}</td>
      <td>{fund.sociedadGerente}</td>
      <td>{fund.codigoClasificacion}</td>
      <td>{fund.codigoMoneda}</td>
      <td>{fund.codigoRegion}</td>
      <td>{fund.codigoHorizonte}</td>
      <td>{fund.indiceMM}</td>
      <td>{fund.comisionIngreso}</td>
      <td>{fund.honorariosAdmSG}</td>
      <td>{fund.honorariosAdmSD}</td>
      <td>{fund.gastosOrdGestion}</td>
      <td>{fund.comisionRescate}</td>
      <td>{fund.comisionTransferencia}</td>
      <td>{fund.honorariosExito}</td>
      <td>{fund.monedaFondo}</td>
      <td>{fund.plazoLiq}</td>
      <td>{fund.decreto596}</td>
      <td>{fund.idFondoCAFCIPadre}</td>
      <td>{fund.idFondoCNVPadre}</td>
      <td>{fund.tipoEscision}</td>
      <td>{fund.repatriacion}</td>
      <td>{fund.minimoInversion}</td>
      <td>{fund.actual}</td>
      <td>{fund.fechaActual}</td>
      <td>{fund.variacionPorcentaje}%</td>
      <td>{fund.reexpPesos}</td>
    </tr>
  );
};

export default FundRow;
