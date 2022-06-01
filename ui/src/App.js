import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';
import { useState, useEffect } from 'react';
import FiveD from './pages/5D';
import Navigation from "./components/Navigation";
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState('Joe')

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit-exercise/:_id" element={<EditExercisePage />} />
          <Route path="/create-exercise" element={<CreateExercisePage />} />
          <Route path="/fived" element={<FiveD />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
