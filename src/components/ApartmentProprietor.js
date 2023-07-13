import React from 'react';
import '../components/ApartmentProprietor.css'
import ApartmentRate from '../components/ApartmentRate';

function ApartmentProprietor() {
    return (
        <div>
            <div className='apartment_proprietor'>
                <h3>
                    <span className='apartment_firstname'>Alexandre</span>
                    <span className='apartment_secondname'>Dumas</span>
                </h3>
                <p className='apartment_chevron'></p>
            </div>  
            <ApartmentRate icon='<i class="fa-light fa-star"></i>'/>
        </div>
    )
}

export default ApartmentProprietor
