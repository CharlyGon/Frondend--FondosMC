import React from 'react';
import { Fund } from '../../types/fundTypes';

/**
 * Interface to represent the props of the BasicInfo component.
 *
 * - fund: The fund to display the basic information.
 */
interface BasicInfoProps {
    fund: Fund;
}

/**
 * Displays the basic information of a fund.
 * The basic information includes the ID, the classification, and the date.
 *
 * @param {BasicInfoProps} props - The props for the BasicInfo component.
 * @returns {JSX.Element} a div element with the basic information of the fund.
 */
const BasicInfo: React.FC<BasicInfoProps> = ({ fund }: BasicInfoProps): JSX.Element => {
    return (
        <div className="fund-card-table">
            <h3>Información Básica</h3>
            <p><strong>ID:</strong> {fund.id}</p>
            <p><strong>Clasificación:</strong> {fund.clasificacion}</p>
            <p><strong>Fecha:</strong> {fund.fecha}</p>
        </div>
    );
};

export default BasicInfo;
