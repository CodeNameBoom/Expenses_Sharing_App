
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrimaryForm from './primaryform/PrimaryForm';
import EntrySection from './entrysection/EntrySection';
import SummaryExpenses from './summarypage/SummaryExpenses';


import './App.css';

function App() {
  const [primaryData, setPrimaryData] = useState({});
  const [expensesData, setExpensesData] = useState([]);
  return (
    
    <Router>
      <Routes>

        <Route 
            path='/' 
            element={<PrimaryForm  
              setPrimaryData={setPrimaryData}
            />} />

        <Route 
            path='/entry' 
            element={<EntrySection 
              primaryData={primaryData}
              setExpensesData={setExpensesData}
          />} />

        <Route 
            path='/summary' 
            element={<SummaryExpenses
              primaryData={primaryData}
              expensesData={expensesData} 
            
            />} />
      </Routes>
    </Router>
  );
}

export default App;
