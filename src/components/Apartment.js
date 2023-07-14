import React from 'react';
import '../components/Apartment.css'
import ApartmentTitle from '../components/ApartmentTitle';
import ApartmentProprietor from '../components/ApartmentProprietor';

function Apartment() {
    
    return (
        <div className='apartment'>
            
            <ApartmentTitle/>
            <ApartmentProprietor/>     
        </div>
    )
}

export default Apartment