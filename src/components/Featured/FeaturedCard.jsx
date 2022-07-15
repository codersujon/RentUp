import React from 'react'

const FeaturedCard = ({ cover, title, label }) => {
    return (
        <>
            <div className="featured__box">
                <img src={cover} alt="Featured Image" />
                <h4>{title}</h4>
                <label>{label}</label>
            </div>
        </>
    )
}

export default FeaturedCard;