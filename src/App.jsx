import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CurrencyConverter from './Pages/Currency';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CurrencyConverter />} />
      </Routes>
    </Router>
  );
}

export default App;