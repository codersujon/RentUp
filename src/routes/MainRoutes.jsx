import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Blog from '../components/Blog/Blog';
import Pricing from '../components/Pricing/Pricing';

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />   
                <Route exact path="/about" element={<About />} />   
                <Route exact path="/services" element={<Services />} />   
                <Route exact path="/blog" element={<Blog />} />   
                <Route exact path="/pricing" element={<Pricing />} />   
            </Routes>
        </>
    )
}

export default MainRoutes