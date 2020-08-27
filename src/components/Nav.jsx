import React from 'react';

function Nav(){


    return (
        <nav className="nav" id="nav">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li><a href="#contact">Contact</a></li>       
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#home">Home</a></li>  
        </ul>
        </nav>
    )
};

export default Nav;