import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ErrorPage.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';
import logofooter from '../assets/Logofooter.png';

function ErrorPage() {
    return (
         <>
         <Navbar logo={logo}/>
         <div className='errorpage'>
            <h1>404</h1>
            <p>Oops! La page que vous demandez n'existe pas. </p>
            <NavLink to='/' >Retour à la page d'accueil</NavLink>
         </div>
         <Footer logofooter={logofooter}/>
         </>
    )
}

export default ErrorPage