import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    csvData: [],
    chartType: 'LineChart',
  },
  reducers: {
    setCsvData: (state, action) => {
      state.csvData = action.payload;
    },
    setChartType: (state, action) => {
      state.chartType = action.payload;
    },
  },
});

export const { setCsvData, setChartType } = dataSlice.actions;

export const selectCsvData = (state) => state.data.csvData;
export const selectChartType = (state) => state.data.chartType;

export default dataSlice.reducer;
