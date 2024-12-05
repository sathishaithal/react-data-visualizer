import React from 'react';
import { Chart } from 'react-google-charts';
import { useSelector } from 'react-redux';
import { selectCsvData, selectChartType } from '../redux/dataSlice';

const ChartComponent = () => {
  const csvData = useSelector(selectCsvData);
  const chartType = useSelector(selectChartType);

  if (csvData.length === 0) {
    return <div className="text-center">No data available.</div>;
  }

  const data = [
    ['Year', 'Sales', 'Profit'],
    ...csvData.map((row) => [row.Year, parseFloat(row.Sales), parseFloat(row.Profit)]),
  ];

  const options = {
    title: 'Company Performance',
    hAxis: { title: 'Year' },
    vAxis: { title: 'Amount' },
    chartArea: { width: '50%' },
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
  <Chart
    chartType={chartType}
    width="100%"
    height="400px"
    data={data}
    options={options}
    className="rounded-md shadow-md"
  />
</div>

  );
};

export default ChartComponent;
