import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ApartmentPage.css'
import Carousel from '../components/Carousel';
import ApartmentTitle from '../components/ApartmentTitle';
import ApartmentProprietor from '../components/ApartmentProprietor';
import DescriptionAbout from '../components/DescriptionAbout';
import apartments from '../datas/Logement.json'
import { useParams } from 'react-router-dom';

function ApartmentPage() {
    
    const apartment= apartments[0] 
    return (
        <div>
           <Navbar />
           <div className='apartmentpage'>
                <Carousel pictures={ apartment.pictures} />
                <div className='apartment1'>
                    <ApartmentTitle/>
                    <ApartmentProprietor/>
                    
                </div>
                <DescriptionAbout/>
           </div>
           <Footer/>
        </div>
    )
}

export default ApartmentPage