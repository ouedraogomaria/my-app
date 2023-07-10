import React from 'react';
import Banner from "../components/Banner.js"
import ApartmentColor from '../components/ApartmentColor.js';
import Footer from '../components/Footer.js';
import Navbar from "../components/Navbar.js"
import Background from "../assets/banner.png"

function Home() {
    return (
        <>
            <Navbar/>
            <Banner title={"Chez vous, partout et ailleurs"} img={Background}/> 
            <ApartmentColor/>
            <Footer/>
        </>
    )
}

export default Home