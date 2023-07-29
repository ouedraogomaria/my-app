import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import DescriptionAbout from '../components/DescriptionAbout';
import Footer from '../components/Footer';
import Background from '../assets/img.png'
import logo from '../assets/Logo.png';
import logofooter from '../assets/Logofooter.png';

function About() {
    return (
        <>
            <Navbar logo={logo}/>
            <Banner img={Background} classCss={"about banner"}/>
            <DescriptionAbout/>
            <Footer logofooter={logofooter}/>
            
        </>
    )
}

export default About