import React from 'react';
import { Fund } from '../types/fundTypes';
import '../styles/FundDetailsTable.css';
import FundChart from './FundChart';

/**
 * Props for the FundDetailsTable component.
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

const FundDetailsTable: React.FC<FundDetailsTableProps> = ({ fund }) => {
    return (
        <div className="fund-details-table-container">
            <h2>Detalles del Fondo: {fund.fondo}</h2>
            <div className="card-container-table">
                {/* Información básica */}
                <div className="fund-card-table">
                    <h3>Información Básica</h3>
                    <p><strong>ID:</strong> {fund.id}</p>
                    <p><strong>Clasificación:</strong> {fund.clasificacion}</p>
                    <p><strong>Fecha:</strong> {fund.fecha}</p>
                </div>

                {/* Valores del fondo */}
                <div className="fund-card-table">
                    <h3>Valores del Fondo</h3>
                    <p><strong>Valor (mil cuotapartes):</strong> {fund.valorMilCuotapartes}</p>
                    <p><strong>Variación cuotaparte %:</strong> {fund.variacionCuotapartePorcentaje.join(', ')}</p>
                    <p><strong>Cantidad de cuotapartes:</strong> {fund.cantidadCuotapartes}</p>
                    <p><strong>Patrimonio:</strong> {fund.patrimonio}</p>
                    <p><strong>Market Share:</strong> {fund.marketShare}</p>
                </div>

                {/* Información de la Sociedad */}
                <div className="fund-card-table">
                    <h3>Información de la Sociedad</h3>
                    <p><strong>Sociedad Depositaria:</strong> {fund.sociedadDepositaria}</p>
                    <p><strong>Sociedad Gerente:</strong> {fund.sociedadGerente}</p>
                    <p><strong>Código CNV:</strong> {fund.codigoCNV}</p>
                    <p><strong>Código CAFCI:</strong> {fund.codigoCAFCI}</p>
                    <p><strong>Código Soc. Gte.:</strong> {fund.codigoSocGte}</p>
                    <p><strong>Código Soc. Dep.:</strong> {fund.codigoSocDep}</p>
                </div>

                {/* Clasificación y Región */}
                <div className="fund-card-table">
                    <h3>Clasificación y Región</h3>
                    <p><strong>Código de Clasificación:</strong> {fund.codigoClasificacion}</p>
                    <p><strong>Código de Moneda:</strong> {fund.codigoMoneda}</p>
                    <p><strong>Código de Región:</strong> {fund.codigoRegion}</p>
                    <p><strong>Código de Horizonte:</strong> {fund.codigoHorizonte}</p>
                </div>

                {/* Comisiones y Honorarios */}
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

                {/* Información Adicional */}
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

                {/* Estado Actual */}
                <div className="fund-card-table">
                    <h3>Estado Actual</h3>
                    <p><strong>Actual:</strong> {fund.actual}</p>
                    <p><strong>Fecha Actual:</strong> {fund.fechaActual}</p>
                    <p><strong>Variación %:</strong> {fund.variacionPorcentaje}</p>
                    <p><strong>Reexpresión en Pesos:</strong> {fund.reexpPesos}</p>
                </div>

                {/* Gráfico del fondo, integrado como una tarjeta que ocupa 3 columnas */}
                <div className="fund-card-table fund-chart-card">
                    <FundChart fund={fund} />
                </div>
            </div>
        </div>
    );
};
export default FundDetailsTable;
