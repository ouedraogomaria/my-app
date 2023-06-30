import React from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <img src= "Logo.png" alt= "logo" />
            </div>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/About">A Propos</NavLink>
        </nav>
    )
}

export default Navbar