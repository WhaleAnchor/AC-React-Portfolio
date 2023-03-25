import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ height: '100%', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;