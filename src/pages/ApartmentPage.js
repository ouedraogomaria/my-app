import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ApartmentPage.css'
import Carrousel from '../components/Carrousel';
import ApartmentTilte from '../components/ApartmentTilte'
import ApartmentProprietor from '../components/ApartmentProprietor';

function ApartmentPage() {
    return (
        <div>
           <Navbar />
           <div className='apartmentpage'>
                <Carrousel/>
                <div className='apartment1'>
                    <ApartmentTilte/>
                    <ApartmentProprietor/>
                </div>
           </div>
           <Footer/>
        </div>
    )
}

export default ApartmentPage