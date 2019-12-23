import React from 'react';
import download from '../images/download.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header"> <Link to="/"><img className="header__logo" src={download} alt="awesome profile card logo" /></Link>
        </header>
        // {/* <a href="./"><img className="header__logo" src={download} alt="awesome profile card logo" /></a> */ }
    )
};
export default Header;