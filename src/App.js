import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DataPage from './pages/DataPage';
import ChartPage from './pages/ChartPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<DataPage />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
