import React from 'react';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import FeaturedCard from '../Home/Featured/FeaturedCard';

const Services = () => {
  return (
    <>
      <section className="services">
        <Breadcrumb
          name="Services"
          title="Services -All Services?"
          cover="assets/images/services.jpg"
        />
        <div className="services__content pt-80 pb-80">
          <div className="container">
            <FeaturedCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Services;