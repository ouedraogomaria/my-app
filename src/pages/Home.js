import React from 'react';
import Banner from "../components/Banner";
import ApartmentCards from '../components/ApartmentCards';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Background from "../assets/banner.png";
import logo from '../assets/Logo.png';
import logofooter from '../assets/Logofooter.png';

function Home() {
    return (
        <>
            <Navbar logo={logo}/>
            <Banner title={"Chez vous, partout et ailleurs"} img={Background} classCss={"banner"}/> 
            <ApartmentCards/>
            <Footer logofooter={logofooter}/>
        </>
    )
}

export default Home