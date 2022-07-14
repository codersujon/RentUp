import React from 'react'
import Header from '../common/Header/Header'
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from './../routes/MainRoutes';

const pages = () => {
  return (
    <>
      <Router>
        <Header />
        <MainRoutes />
      </Router>
    </>
  )
}

export default pages