import React from 'react';
import '../components/ApartmentRate.css'

function ApartmentRate(props) {
    
    return (
        <div className='apartmentrate'>
            <i className={`fa-solid fa-star ${props.rating >= 1 ? 'checked' : 'decolaration'}`}></i>  
            <i className={`fa-solid fa-star ${props.rating >= 2 ? 'checked' : 'decolaration'}`}></i>            
            <i className={`fa-solid fa-star ${props.rating >= 3 ? 'checked' : 'decolaration'}`}></i>            
            <i className={`fa-solid fa-star ${props.rating >= 4 ? 'checked' : 'decolaration'}`}></i>            
            <i className={`fa-solid fa-star ${props.rating >= 5 ? 'checked' : 'decolaration'}`}></i>            
          
            
        </div>
    )
}

export default ApartmentRate
