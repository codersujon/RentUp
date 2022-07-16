import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import AwardCard from './AwardCard';

const Awards = () => {
    return (
        <>
            <section className="awards">
                <div className="container">
                    <SectionTitle
                        title="Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services"
                        subtitle="Our Awards"
                    />
                    <AwardCard />
                </div>
            </section>
        </>
    )
}

export default Awards