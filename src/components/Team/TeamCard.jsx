import React from 'react';
import TeamInfo from '../../data/TeamInfo.json';

const TeamCard = () => {
    return (
        <div className="team__content grid-3">
            {
                TeamInfo.map((TItem, index) => {
                    const { list, cover, address, name, icon } = TItem;
                    return (
                        <div className="team__card" key={index}>
                            <button className='btn3'>{list} Listings</button>
                            <div className="team__body">
                                <div className="team__img">
                                    <img src={cover} alt="Team__Member" />
                                    <i class="fa-solid fa-circle-check"></i>
                                </div>
                                <i class="fa-solid fa-location-dot"></i> <label>{address}</label>
                                <h4>{name}</h4>
                                <ul className="team__socials">
                                    {
                                        icon.map((icon, index) => {
                                            return (
                                                <li key={index}>
                                                    <i className={icon.facebook}></i>
                                                    <i className={icon.linkedin}></i>
                                                    <i className={icon.twitter}></i>
                                                    <i className={icon.instagram}></i>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="team__button flex">
                                    <button>
                                        <i class="fa-solid fa-envelope"></i> Message
                                    </button>
                                    <button className='btn4'>
                                        <i class="fa-solid fa-phone-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TeamCard
