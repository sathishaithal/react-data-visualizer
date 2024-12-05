
# Overview

This application is a ReactJS-based frontend that allows users to:

1. Upload files (CSV or any format).  
2. Validate that the uploaded file is a CSV.  
3. Display an error for invalid files.  
4. Parse the CSV using PapaParse.  
5. Proceed to a chart page after successfully uploading a valid CSV file.  
6. The project utilizes React-Redux for state management and React Router for navigation. Tailwind CSS is used for styling.

---

## Features

- Upload any file type but display an error message for non-CSV files.  
- Validate the uploaded file and parse its contents.  
- Display parsed data in the state using Redux.  
- Navigate to the Chart page on valid file upload.  

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14+)  
- npm (Node Package Manager)  

---

## Installation

Follow these steps to set up the application locally:

1. **Clone the repository**:  

   ```bash
   git clone https://github.com/sathishaithal/react-data-visualizer.git
   cd react-data-visualizer
   ```

2. **Install dependencies**:  

   ```bash
   npm install
   ```

---

## Running the Application

1. **Start the development server**:  

   ```bash
   npm start
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000).

---

## Usage

1. On the homepage, click the **"Choose File"** button and upload a CSV file.  
2. If the file is valid:  
   - The parsed data will be stored in the state.  
   - The **"Proceed to Chart"** button will appear.  
3. Click **"Proceed to Chart"** to navigate to the chart page.  

---

## Technologies Used

- **ReactJS**: Frontend framework for building user interfaces.  
- **Redux**: For managing the application state.  
- **PapaParse**: For parsing CSV files.  
- **React Router**: For navigation between pages.  
- **Tailwind CSS**: For styling the UI components.  

---

## Troubleshooting

- **Error**: *Please upload a valid CSV file.*  
  This occurs when the uploaded file is not in `.csv` format. Please ensure you are uploading the correct file type.  

- **Error**: *Failed to parse CSV file.*  
  This occurs if the CSV file has an incorrect structure or is corrupted.  

---

## Contributors

- **Sathish Aithal V S**  
