import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ErrorPage.css';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
    return (
         <>
         <Navbar/>
         <div className='errorpage'>
            <h1>404</h1>
            <h2>Oops! La page que vous demandez n'existe pas </h2>
            <NavLink to='/' >Retour à la page d'accueil</NavLink>
         </div>
         <Footer/>
         </>
    )
}

export default ErrorPage