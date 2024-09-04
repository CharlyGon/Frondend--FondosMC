/**
 * Represents a fund with all its financial and organizational details.
 */
export interface Fund {
    id: number | null | undefined;
    fondo: string;
    clasificacion: string;
    fecha: string;
    valorMilCuotapartes: number;
    variacionCuotapartePorcentaje: number[];
    cantidadCuotapartes: number;
    patrimonio: number;
    marketShare: number;
    sociedadDepositaria: string;
    codigoCNV: string;
    calificacion: string;
    codigoCAFCI: string;
    codigoSocGte: string;
    codigoSocDep: string;
    sociedadGerente: string;
    codigoClasificacion: string;
    codigoMoneda: string;
    codigoRegion: string;
    codigoHorizonte: string;
    indiceMM: number;
    comisionIngreso: number;
    honorariosAdmSG: number;
    honorariosAdmSD: number;
    gastosOrdGestion: number;
    comisionRescate: number;
    comisionTransferencia: number;
    honorariosExito: number;
    monedaFondo: string;
    plazoLiq: string;
    decreto596: string;
    idFondoCAFCIPadre: string;
    idFondoCNVPadre: string;
    tipoEscision: string;
    repatriacion: string;
    minimoInversion: number;
    actual: number;
    fechaActual: string;
    variacionPorcentaje: number;
    reexpPesos: number;
    fechas: string[];
}
