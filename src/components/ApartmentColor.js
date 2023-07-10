import React from 'react';
import "./ApartmentColor.css"
import { Link } from 'react-router-dom';
import apartments from '../datas/Logement.json' 

function ApartmentColor() {
    return (
        <div className='apartmentColor'>
            {apartments.map((apartment) => (
                <div className='apartment'>
                    <Link to={'/flats/' + apartment.id}>
                        <h3>{apartment.title}</h3>
                    </Link>
                </div>
            ))}
            
            
        </div>       
    )
}

export default ApartmentColor
