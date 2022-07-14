import React from 'react'
import FeaturedCard from './FeaturedCard';
import SectionTitle from './../SectionTitle/SectionTitle';

const Featured = () => {
  return (
    <>
      <section className="featured background">
         <div className="container">
            <SectionTitle
              title="Featured Property Types"
              subtitle="Find All Type of Property."
            /> 
            <FeaturedCard />
         </div>
      </section>
    </>
  )
}

export default Featured