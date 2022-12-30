// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './NavigationBar.css';

function NavigationBar()
{
    return (
        <nav>
            <Logo />

            <div className="navLinks">
                <NavLink to="/home" activeClassName="active" className="fontSizeNavBar">Home</NavLink>
                <NavLink to="/contact-us" activeClassName="active" className="fontSizeNavBar">Contact</NavLink>
                <NavLink to="/about" activeClassName="active" className="fontSizeNavBar">About</NavLink>
            </div>       
            
        </nav>
    );
}

export default NavigationBar;