import React from 'react'
import Header from '../common/Header/Header'
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import MainRoutes from './../routes/MainRoutes';

=======
import MainRoutes from '../routes/MainRoutes';
>>>>>>> alt-history
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