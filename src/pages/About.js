import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import DescriptionAbout from '../components/DescriptionAbout';
import Footer from '../components/Footer';
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