import React from 'react'

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