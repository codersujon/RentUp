import React from 'react'

<<<<<<< HEAD
const FeaturedCard = ({img, title, total}) => {
  
  return (
    <>
      <div className="content grid5">
        <div className="box">
          <img src={img} alt="Featured__Image" />
          <h4>{title}</h4>
          <label>{total}</label>
        </div>
      </div>
    </>
  )
}

export default FeaturedCard
=======
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
>>>>>>> alt-history
