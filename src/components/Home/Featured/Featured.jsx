import React from 'react'
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import FeaturedCard from '../Featured/FeaturedCard';


const Featured = () => {
    return (
        <>
            <section className="featured bg-light pt-80 pb-80 text-center">
                <div className="container">
                    <SectionTitle
                        title="Featured Property Types"
                        subtitle="Find All Type of Property."
                    />
                    <FeaturedCard />
                </div>
            </section>
        </>
    )
}

export default Featured
