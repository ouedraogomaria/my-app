import React from 'react';
import '../components/ApartmentTag.css'

function ApartmentTag(props) {
    return (
        
            <div className='apartment_tag'>
                <span>{props.tag}</span>
                
            </div>
    )
}

export default ApartmentTag