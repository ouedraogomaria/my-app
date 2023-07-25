import React from 'react';
import "./ApartmentCards.css"
import apartments from '../datas/Logement.json' 
import ApartmentCard from './ApartmentCard';

function ApartmentCards() {
    return (
        <div className='apartmentcards'>
            
            {apartments.map((apartment) => (
             <ApartmentCard title={apartment.title} imageUrl={apartment.cover} key={apartment.id} id={apartment.id}/>
            ))}
            
            
        </div>       
    )
}

export default ApartmentCards

