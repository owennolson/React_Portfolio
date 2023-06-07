import React from 'react';
import headerImage from '../../Images/cherry.jpg';
import './style.css';

function Header(props) {
    return(
        <header>
            <h1 className='name'>Owen</h1>
            <img src={headerImage} alt="cherry header image"></img>
        </header>
    );
}

export default Header;

