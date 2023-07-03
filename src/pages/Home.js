import React from 'react';
import Banner from "../components/Banner.js"
import ApartmentColor from '../components/ApartmentColor.js';
import Footer from '../components/Footer.js';
import Navbar from "../components/Navbar.js"

function Home() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <ApartmentColor/>
            <Footer/>
        </>
    )
}

export default Home