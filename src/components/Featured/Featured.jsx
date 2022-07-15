import React from 'react'
import SectionTitle from './../SectionTitle/SectionTitle';
import FeaturedCard from './FeaturedCard';
import FeaturedInfo from '../../data/FeaturedInfo.json'


const Featured = () => {
  return (
    <>
      <section className="featured">
         <div className="container">
            <SectionTitle
              title="Featured Property Types"
              subtitle="Find All Type of Property."
            /> 
            
            {FeaturedInfo.map((items) =>(
                  <FeaturedCard 
                    key={items.id}
                    img={items.image}
                    title={items.title}
                    total={items.total}
                  />
              ))}
         </div>
      </section>
    </>
  )
}

export default Featured 