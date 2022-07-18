import React from 'react';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import LocationCard from './LocationCard';

const Location = () => {
  return (
    <>
    <section className="location pt-80 pb-80 text-center">
        <div className="container">
            <SectionTitle 
                title="Explore By Location" 
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            />
            <LocationCard />
        </div>
    </section>
    </>
  )
}

export default Location