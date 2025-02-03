import React from 'react';
import Homepage from './components/home/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;