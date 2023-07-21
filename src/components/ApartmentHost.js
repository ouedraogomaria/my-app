import React from 'react';
import '../components/ApartmentHost.css'


function ApartmentHost(props) {
    return (
        
            <div className='apartment_host'>
                <span>{props.name}</span>
                <img src={props.picture} alt='portrait hostName' />
            </div>  
            
        
    )
}

export default ApartmentHost
