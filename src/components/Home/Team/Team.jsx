import React from 'react';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <>
    <section className="team bg-light pt-80 pb-80 text-center">
        <div className="container">
            <SectionTitle 
                title="Our Featured Agents"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            />
            <TeamCard />
        </div>
    </section>
    </>
  )
}

export default Team