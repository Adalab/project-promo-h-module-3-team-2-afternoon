import React from 'react';
import logoadalab from '../images/logoadalab.png';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__copyright"> Awesome profile-cards ©2019</p>
            <div className="footer__logo">
                <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">
                    <img className="footer__logo-image" src={logoadalab} alt="go to Adalab web" />
                </a>
            </div>
        </footer>
    )
};
export default Footer;