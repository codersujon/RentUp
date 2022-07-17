import React from 'react'
import Header from '../common/Header/Header'
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from '../routes/MainRoutes';
import Footer from '../common/Footer/Footer';

const pages = () => {
  return (
    <>
      <Router>
        <Header />
        <MainRoutes />
        <Footer />
      </Router>
    </>
  )
}

export default pages