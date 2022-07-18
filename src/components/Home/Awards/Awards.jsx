import React from 'react';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import AwardCard from './AwardCard';

const Awards = () => {
    return (
        <>
            <section className="awards pt-80 pb-80 text-center">
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