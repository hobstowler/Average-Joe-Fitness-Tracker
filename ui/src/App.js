import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';
import { useState, useEffect } from 'react';
import FiveD from './pages/5D';

function App() {
  const [theme, setTheme] = useState('Joe')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit-exercise/:_id" element={<EditExercisePage />} />
          <Route path="/create-exercise" element={<CreateExercisePage />} />
          <Route path="/fived" element={<FiveD />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
