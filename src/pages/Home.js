import React from 'react';
import Banner from "../components/Banner"
import ApartmentCards from '../components/ApartmentCards';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar"
import Background from "../assets/banner.png"


function Home() {
    return (
        <>
            <Navbar/>
            <Banner title={"Chez vous, partout et ailleurs"} img={Background}/> 
            <ApartmentCards/>
            <Footer/>
        </>
    )
}

export default Home