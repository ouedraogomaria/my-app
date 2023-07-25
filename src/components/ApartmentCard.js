import React from 'react';
import "./ApartmentCard.css"
import { Link } from 'react-router-dom';


function ApartmentCard(props) {

    return (
        <div className='apartment' key={props.id}>
            
            <Link to={'/flats/' + props.id}>
                <div className='back_drop'></div>
                <img src={props.imageUrl} alt='image logement'/> 
                <div className='apartment_title'>{props.title}</div>
            </Link>
                    
                    
        </div>       
    )
}

export default ApartmentCard

