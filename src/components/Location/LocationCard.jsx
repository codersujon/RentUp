import React from 'react';
import LocationInfo from '../../data/LocationInfo.json';

const LocationCard = () => {
  return (
    <div className="location__content grid-3">
        {
            LocationInfo.map((LocItem, index)=>{
                const { name, Villas, Apartments, Offices, cover } = LocItem;
                return(
                    <div className="location__box" key="index">
                        <img src={cover} alt="Location__Img" />
                        <div className="location__overlay">
                            <h5>{name}</h5>
                            <p>
                                <label>{Villas}</label>
                                <label>{Offices}</label>
                                <label>{Apartments}</label>
                            </p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default LocationCard
