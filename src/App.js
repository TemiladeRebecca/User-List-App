import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import CustomButton from './components/CustomButton';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  // Load the saved theme from localStorage when the app loads
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' theme
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
  }, []);

  // Toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    // Update the body class to reflect the new theme
    document.body.classList.remove('light', 'dark'); // remove existing theme
    document.body.classList.add(newTheme);
  };

  return (
    <Router>
      <CustomButton isDarkMode={theme === 'dark'} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
