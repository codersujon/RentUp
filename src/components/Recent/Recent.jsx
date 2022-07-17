import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import RecentCard from './RecentCard';

const Recent = () => {
  return (
    <>
        <section className="recent pt-80 pb-80 text-center">
            <div className="container">
                <SectionTitle 
                    title="Recent Property Listed" 
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                />
                <RecentCard />
            </div>
        </section>
    </>
  )
}

export default Recent

