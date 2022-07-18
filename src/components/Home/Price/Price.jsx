import React from 'react';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import PriceCard from './PriceCard';

const Price = () => {
    return (
        <section className="price pt-80 pb-80 text-center">
            <div className="container">
                <SectionTitle
                    title="Select Your Package"
                    subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
                />
                <PriceCard />
            </div>
        </section>
    )
}

export default Price