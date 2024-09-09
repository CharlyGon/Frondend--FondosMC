import React from 'react';
import { Line } from 'react-chartjs-2';
import { Fund } from '../types/fundTypes';
import '../utils/chartConfig';

/**
 * Props for the FundChart component.
 *
 * @property {Fund} fund - The fund object containing data such as the dates and percentage variations for the chart.
 */
interface FundChartProps {
  fund: Fund;
}

/**
 * Renders a line chart that displays the percentage variations of a specific fund
 * over time. The chart uses the dates as labels on the X-axis and the percentage
 * variations on the Y-axis.
 *
 * @param {FundChartProps} props - The props for the component.
 * @param {Fund} props.fund - The fund object that contains the variation data and labels for the chart.
 *
 * @returns {JSX.Element} A div containing the Line chart of the fund's variations.
 */
const FundChart: React.FC<FundChartProps> = ({ fund }: FundChartProps): JSX.Element => {
  const data = {
    labels: fund.fechas,
    datasets: [
      {
        label: `Variación del Fondo ${fund.fondo}`,
        data: fund.variacionCuotapartePorcentaje,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="fund-chart-card">
      <Line data={data} options={options} />
    </div>
  );
};

export default FundChart;
