import React from 'react';
import '../components/Carousel.css'

function Carousel({pictures}) {
    

    return (
        <div className='carousel'>
             {pictures.map((image) => (
                <img src={image} key={image} alt='image apartment'/>
            ))}
            

        </div>
    )
}

export default Carousel

