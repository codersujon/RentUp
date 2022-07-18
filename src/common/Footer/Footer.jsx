import React from 'react';
import FooterContact from '../FooterContact/FooterContact';
import FooterInfo from '../../data/FooterInfo.json';

const Footer = () => {
    return (
        <>
            <FooterContact />
            <footer className='footer pt-80 pb-80'>
                <div className="container">
                    <div className="footer__widget">
                        <div className="logo">
                            <img src="assets/images/logo-light.png" alt="Footer__logo" />
                        </div>
                        <h2>Do You Need Help With Anything?</h2>
                        <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                        <div className="footer__subscribe flex">
                            <input type="email" name="email" id="email" placeholder="Email Address" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    {
                        FooterInfo.map(val => {
                            const { title, text } = val;
                            return (
                                <div className="footer__widget">
                                    <h3>{title}</h3>
                                    <ul>
                                        {text.map(items => {
                                            return (
                                                <li>
                                                    <a href="/">
                                                        {items.list}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </footer>
            <div className="footer__copyright">
                <div className="container">
                    <span>&copy; 2022 RentUP. Designd By CoderSujon.</span>
                </div>
            </div>

        </>
    )
}

export default Footer