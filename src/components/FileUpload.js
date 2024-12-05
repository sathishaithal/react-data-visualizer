import React, { useState } from 'react';
import Papa from 'papaparse';
import { useDispatch } from 'react-redux';
import { setCsvData } from '../redux/dataSlice';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const [error, setError] = useState(null);
  const [isFileValid, setIsFileValid] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setError('No file selected.');
      return;
    }

    setError(null);
    setIsFileValid(false); 

    if (file.type !== 'text/csv') {
      setError('Please upload a valid CSV file.');
      return;
    }

    Papa.parse(file, {
      complete: (result) => {
        if (result.errors.length > 0) {
          setError('Error parsing CSV file.');
        } else {
          dispatch(setCsvData(result.data));
          setIsFileValid(true);
        }
      },
      header: true,
      skipEmptyLines: true, 
      error: (error) => {
        setError('Failed to parse CSV file. Please check the file content.');
      }
    });
  };

  const handleProceedToChart = () => {
    if (isFileValid) {
      navigate('/chart'); 
    } else {
      setError('Please upload a valid CSV file before proceeding.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[40rem] h-[20rem] border border-gray-300 rounded-lg bg-white p-8 shadow-2xl">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Upload CSV File</h2>
      <input
        type="file"
        accept="*/*"
        onChange={handleFileChange}
        className="bg-blue-500 text-white px-8 py-3 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
      />
      {error && <div className="text-red-600 mt-4">{error}</div>}
      
      {isFileValid && (
        <button
          onClick={handleProceedToChart}
          className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Proceed to Chart
        </button>
      )}
    </div>
  );
};

export default FileUpload;
