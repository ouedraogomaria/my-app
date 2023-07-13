import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ApartmentPage.css'
import Carrousel from '../components/Carrousel';
import ApartmentTilte from '../components/ApartmentTilte';
import ApartmentProprietor from '../components/ApartmentProprietor';
import DescriptionAbout from '../components/DescriptionAbout';
import apartments from '../datas/Logement.json'

function ApartmentPage() {
    
    let apartment= apartments[0] 
    return (
        <div>
           <Navbar />
           <div className='apartmentpage'>
                <Carrousel pictures={ apartment.pictures} />
                <div className='apartment1'>
                    <ApartmentTilte/>
                    <ApartmentProprietor/>
                    
                </div>
                <DescriptionAbout/>
           </div>
           <Footer/>
        </div>
    )
}

export default ApartmentPage