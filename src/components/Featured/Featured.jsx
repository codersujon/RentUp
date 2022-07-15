import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import FeaturedCard from './FeaturedCard';
import FeaturedInfo from '../../data/FeaturedInfo.json';

const Featured = () => {
    return (
        <>
            <section className="featured">
                <div className="container">
                    <SectionTitle
                        title="Featured Property Types"
                        subtitle="Find All Type of Property."
                    />

                    <div className="featured__Cards grid-5">
                        {
                            FeaturedInfo.map(items => {
                                return (
                                    <FeaturedCard
                                        key={items.id}
                                        cover={items.cover}
                                        title={items.name}
                                        label={items.total}
                                    />
                                )
                            })
                        }
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Featured
