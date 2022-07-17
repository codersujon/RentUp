import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PriceCard from './PriceCard';

const Price = () => {
    return (
        <section className="price">
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