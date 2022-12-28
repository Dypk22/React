import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path='*' element={ 'No page' }/>
        </Routes>
        <Footer />
        </>
    );
}

export default App;