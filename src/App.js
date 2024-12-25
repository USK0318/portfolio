import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './comp/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Home from './pages/Home';
import { Footer } from './comp/Footer';
import Loader from './Loader'; // Import the loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div><Header /></div>
      <div className="final">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
