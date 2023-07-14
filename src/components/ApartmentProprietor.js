import React from 'react';
import '../components/ApartmentProprietor.css'
import ApartmentRate from '../components/ApartmentRate';

function ApartmentProprietor() {
    return (
        <div>
            <div className='apartment_proprietor'>
                <h3>
                    <div className='apartment_firstname'>Alexandre</div>
                    <span className='apartment_secondname'>Dumas</span>
                </h3>
                <p className='apartment_chevron'></p>
            </div>  
            <ApartmentRate/>
        </div>
    )
}

export default ApartmentProprietor
