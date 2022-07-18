import React from 'react';
import AwardInfo from '../../../data/AwardInfo.json';

const AwardCard = () => {
    return (
        <div className="awards__content grid-4">
            {
                AwardInfo.map((AwItem, index) => {
                    return (
                        <div className="awards__box " key={index}>
                            <div className="awards__icon">
                                <span>
                                    <i className={AwItem.icon}></i>
                                </span>
                                <h2>{AwItem.num}</h2>
                                <p>{AwItem.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AwardCard