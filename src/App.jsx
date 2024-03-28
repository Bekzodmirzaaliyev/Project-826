import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoList from './Pages/ToDoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;