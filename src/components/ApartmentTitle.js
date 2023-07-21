import React from 'react';
import './ApartmentTitle.css';


function ApartmentTitle(props) {
    return (
        <div className='apartment_tilte'>
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
            
        </div>
    )
}

export default ApartmentTitle