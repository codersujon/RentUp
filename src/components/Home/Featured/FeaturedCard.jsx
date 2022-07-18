import React from 'react';
import FeaturedInfo from '../../../data/FeaturedInfo.json';
const FeaturedCard = ({ cover, title, label }) => {
    return (
        <>
            <div className="featured__Cards grid-5">
                {
                    FeaturedInfo.map(items => {
                        const {cover, name, total } = items;
                        return (
                            <div className="featured__box"  key={items.id}>
                                <img src={cover} alt="Featured Image" />
                                <h4>{name}</h4>
                                <label>{total}</label>
                            </div>
                        )
                    })
                }
            </div>


           
        </>
    )
}

export default FeaturedCard;