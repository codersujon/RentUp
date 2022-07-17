import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Price from '../components/Price/Price';

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />   
                <Route exact path="/pricing" element={<Price />} />   
            </Routes>
        </>
    )
}

export default MainRoutes