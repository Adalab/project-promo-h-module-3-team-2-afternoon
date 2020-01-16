import React from 'react';
import logoRemder from '../images/remder-logo.gif';
import logoadalab from '../images/logoadalab.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__team">
                <img className="footer__team__logo" src={logoRemder} Remder alt="team logo" />
                <p className="footer__team__name"> REMDER</p>
            </div>
            <div className="footer__logo">
                <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">
                    <img className="footer__logo-image" src={logoadalab} alt="go to Adalab web" />
                </a>
            </div>
        </footer >
    )
};
export default Footer;