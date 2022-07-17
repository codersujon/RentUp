import React from 'react';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import SectionTitle from '../SectionTitle/SectionTitle';

const About = () => {
    return (
        <>
            <section className="about">
                <Breadcrumb
                    name="About Us"
                    title="About Us - Who We Are?"
                    cover="assets/images/about/about.jpg"
                />
                <div className="container flex pt-80 pb-80">
                    <div className="about__left">
                        <SectionTitle
                            title="Our Agency Story"
                            subtitle="Check out our company story and work process"
                        />

                        <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <button className='btn-round'>More About Us</button>
                    </div>
                    <div className="about__right">
                        <img src="assets/images/about/immio.jpg" alt="About__Immio__img" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;

