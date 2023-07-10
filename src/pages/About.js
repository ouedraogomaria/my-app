import React from 'react';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import DescriptionAbout from '../components/DescriptionAbout.js';
import Footer from '../components/Footer.js';
import Background from '../assets/img.png'
function About() {
    return (
        <>
            <Navbar/>
            <Banner img={Background}/>
            <DescriptionAbout/>
            <Footer/>
            
        </>
    )
}

export default About