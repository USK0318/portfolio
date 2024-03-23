import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './comp/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Home from './pages/Home';
import { Footer } from './comp/Footer';

function App() {
  return (
    <>
      <div ><Header /></div>
      <div class ='final'>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;
