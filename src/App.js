import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contact from './components/Contact';

import AboutUs from './components/AboutUs';
import Home from './components/Home';
import MobilitySol from './components/MobiltySol';
function App() {
  return (
    <Router>
      <div className="App">
        

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mobility" element={<MobilitySol />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
