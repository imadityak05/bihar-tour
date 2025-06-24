import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar/navBar';
import Home from './components/home/Home';
// import other pages...

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other pages like about, reviews, etc. */}
      </Routes>
    </Router>
  );
};

export default App;
