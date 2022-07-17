import React from 'react';
import Breadcrumb from './../../common/Breadcrumb/Breadcrumb';
import Featured from './../Featured/Featured';

const Services = () => {
  return (
    <>
        <section className="services">
            <Breadcrumb
                name="Services"
                title="Services -All Services"
                cover="assets/images/services.jpg"
            />
            <Featured />
        </section>
    </>
  )
}

export default Services