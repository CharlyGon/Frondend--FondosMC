import React from 'react';
import { useParams } from 'react-router-dom';
import { mockFunds } from '../../service/mockData';
import FundDetailsTable from './FundDetailsTable';
import '../../styles/FundDetailsPage.css';

/**
 * Displays the details of a specific fund based on the ID provided in the URL.
 * If the fund is found, it shows the fund's name and a chart with its variations.
 *
 * If the fund is not found, it displays a message indicating that the fund was not found.
 *
 * @returns {JSX.Element} The fund details and chart, or a "not found" message.
 */
const FundDetails: React.FC = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const numericId = Number(id);

    const fund = mockFunds.find(f => f.id === numericId);

    if (!fund) {
        return <div>Fondo no encontrado</div>;
    }

    return (
        <div className="fund-details-container">
            <FundDetailsTable fund={fund} />
        </div>
    );
};

export default FundDetails;
