import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Price from '../components/Price/Price';
import About from '../components/About/About';
import Services from '../components/Services/Services';

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />   
                <Route exact path="/about" element={<About />} />   
                <Route exact path="/services" element={<Services />} />   
                <Route exact path="/pricing" element={<Price />} />   
            </Routes>
        </>
    )
}

export default MainRoutes