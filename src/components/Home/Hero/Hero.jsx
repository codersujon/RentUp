import React from 'react';
import Heading from '../../../common/Header/Heading';


const Hero = () => {
    return (
        <>
        <section className="hero">
            <div className="container">

                <Heading 
                    title="Search Your Next Home"
                    subtitle="Find new & featured property located in your local city."
                />

                <form className="flex">
                    <div className="hero__box">
                        <span>City/Street</span>
                        <input type="text" placeholder="location" />
                    </div>
                    <div className="hero__box">
                        <span>Property Type</span>
                        <input type="text" placeholder="Property Type" />
                    </div>
                    <div className="hero__box">
                        <span>Price Range</span>
                        <input type="text" placeholder="Price Range" />
                    </div>
                    <div className="hero__box">
                        <h4>Advance Filter</h4>
                       <button className="btn">
                            <i class="fa-solid fa-search"></i>
                       </button>
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}

export default Hero;