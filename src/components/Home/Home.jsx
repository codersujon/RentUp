import React from 'react'
import Hero from './Hero/Hero';
import Featured from './../Featured/Featured';
import Recent from '../Recent/Recent';
import Awards from '../Awards/Awards';
import Location from '../Location/Location';

const Home = () => {
  return (
    <>
       <Hero />
       <Featured />
       <Recent />
       <Awards />
       <Location />
    </>
  )
}

export default Home

