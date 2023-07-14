import React from 'react';
import './ApartmentTitle.css'

function ApartmentTitle() {
    return (
        <div className='apartment_tilte'>
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <h2>Paris, Île-de-France</h2>
            <div className='apartment_tag'>
                <span>Cozy</span>
                <span>Canal</span>
                <span>Paris 10</span>
            </div>
        </div>
    )
}

export default ApartmentTitle