import React from 'react';
import download from '../images/download.svg';

const Header = () => {
    return (
        <header className="header">
            <a href="./"><img class="header__logo" src={download} alt="awesome profile card logo" /></a>
        </header>
    )
};
export default Header;