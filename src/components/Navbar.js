import React from 'react';
import { NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <img src= "logo.png" alt= "logo" />
            </div>
            <NavLink to="/" >Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
        </nav>
    )
}

export default Navbar