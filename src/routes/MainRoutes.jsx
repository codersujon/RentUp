import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />}>
                     <Route exact path="/home" element={<Home />} />
                </Route>     
            </Routes>
        </>
    )
}

export default MainRoutes