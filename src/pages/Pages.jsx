import React from 'react'
import Header from '../common/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';

const pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default pages