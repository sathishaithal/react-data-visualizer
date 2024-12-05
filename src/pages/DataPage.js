import React from 'react';
import FileUpload from '../components/FileUpload';
// import { Link } from 'react-router-dom';

const DataPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
    <h1 className="text-4xl font-bold text-blue-700 mt-10 mb-6">Upload Your Data</h1>
    <FileUpload />
    {/* <Link
      to="/chart"
      className="mt-8 text-lg font-medium text-blue-600 hover:text-blue-800 underline"
    >
      Proceed to Chart
    </Link> */}
  </div>
  

  );
};

export default DataPage;
