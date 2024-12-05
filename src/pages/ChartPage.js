import React, { useState } from 'react';
import ChartComponent from '../components/Chart';
import { useDispatch } from 'react-redux';
import { setChartType } from '../redux/dataSlice';

const ChartPage = () => {
  const [chartType, setChartTypeLocal] = useState('LineChart');
  const dispatch = useDispatch();

  const handleChartTypeChange = (e) => {
    const selectedType = e.target.value;
    setChartTypeLocal(selectedType);
    dispatch(setChartType(selectedType));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-100 to-teal-200">
    <h1 className="text-4xl font-bold text-green-700 mt-10 mb-6">Visualize Your Data</h1>
    <select
      value={chartType}
      onChange={handleChartTypeChange}
      className="mb-6 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
    >
      <option value="LineChart">Line Chart</option>
      <option value="BarChart">Bar Chart</option>
      <option value="PieChart">Pie Chart</option>
      <option value="Histogram">Histogram</option>
      <option value="ScatterChart">Scatter Chart</option>
      


    </select>
    <ChartComponent />
  </div>
  

  );
};

export default ChartPage;
