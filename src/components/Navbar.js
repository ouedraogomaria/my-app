import React from 'react';
import "./Navbar.css"
import { NavLink, useLocation } from 'react-router-dom';

function Navbar(props) {
    const location = useLocation();
    return (
        <nav className='navbar'>
            <div className='navbar_logo' >
                <img src= {props.logo} alt= "logo" />
            </div>
            <NavLink 
                to="/"
                className={()=> {if(location.pathname === "/") {return "active"}}}
            
                >Accueil</NavLink>
            <NavLink to="/About"
                className={()=> {if(location.pathname === "/About") {return "active"}}}

                >A Propos</NavLink>
            
        </nav>
    )
}

export default Navbar