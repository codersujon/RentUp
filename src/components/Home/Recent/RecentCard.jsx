import React from "react";
import RecentInfo from '../../../data/RecentInfo.json';

const RecentCard = () => {
    return (
        <>
            <div className="recent__Content grid-3">
                {
                    RecentInfo.map((ReItem, index) => {
                        const { cover, name, location, category, price, type } = ReItem;
                        return (
                            <div className="recentCard" key={index}>
                                <div className="recentCard__img">
                                    <img src={cover} alt="" />
                                </div>
                                <div className="recentCard__text">
                                    <div className="recentCard__category flex">
                                        <span style={{
                                            background: category === "For Sale" ? "#25b5791a" : "#ff98001a ",
                                            color: category === "For Sale" ? "#25b579 " : "#ff9800 "
                                        }}>
                                            {category}
                                        </span>

                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <h4>{name}</h4>
                                    <p>
                                        <i className="fa-solid fa-location-dot"></i> {location}
                                    </p>
                                </div>
                                <div className="recentCard__btn flex">
                                    <div>
                                        <button className="btn-round">{price}</button>
                                        <label htmlFor="">/sqft</label>
                                    </div>
                                    <span>{type}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RecentCard;