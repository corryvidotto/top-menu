// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import NavBar from './NavBar'; // Import NavBar component
import './App.css';

// Import the page components
import ABCPage from './pages/ABCPage';
import CDEPage from './pages/CDEPage';
import FGHPage from './pages/FGHPage';
import IJKPage from './pages/IJKPage';

const App = () => {
  return (
    <Router>
      {/* The NavBar is always visible */}
      <NavBar />
      
      {/* Define the Routes for different pages */}
      <Routes>
        <Route path="/" element={
          <div className="main-content">
            <h1>Welcome to the Home Page!</h1>
            <p>This is the landing page of the app</p>
          </div>} /> {/* Default Home Page */}
        <Route path="/abc" element={<ABCPage />} />
        <Route path="/cde" element={<CDEPage />} />
        <Route path="/fgh" element={<FGHPage />} />
        <Route path="/ijk" element={<IJKPage />} />
      </Routes>
    </Router>
  );
};

export default App;