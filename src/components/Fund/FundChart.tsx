import React from "react";
import { Line } from "react-chartjs-2";
import { Fund } from "../../types/fundTypes";
import "../../utils/chartConfig";
import { ChartData } from "chart.js";

/**
 * Interface to represent the props of the FundChart component.
 *
 * - fund: The fund object containing data such as the dates and percentage variations for the chart.
 */
interface FundChartProps {
  fund: Fund;
}

const CHART_COLORS = {
  background: "rgba(75,192,192,0.2)",
  border: "rgba(75,192,192,1)",
};

/**
 * Generates the data for the chart based on the fund's information.
 *
 * @param {Fund} fund - The fund object containing the variation data and labels.
 * @returns {ChartData<"line">} The formatted data for the chart.
 */
const generateChartData = (fund: Fund): ChartData<"line"> => ({
  labels: fund.fechas,
  datasets: [
    {
      label: `Variación del Fondo ${fund.nombreFondo}`,
      data: fund.variacionCuotapartePorcentaje,
      fill: true,
      backgroundColor: CHART_COLORS.background,
      borderColor: CHART_COLORS.border,
    },
  ],
});

/**
 * Chart options configuration for the fund"s line chart.
 *
 * @returns {object} The chart options object.
 */
const getChartOptions = (): object => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
});

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
  const data = generateChartData(fund);
  const options = getChartOptions();

  return (
    <div className="fund-chart-card">
      <Line data={data} options={options} />
    </div>
  );
};

export default FundChart;
