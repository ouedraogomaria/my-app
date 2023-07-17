import React from 'react';
import '../components/Carousel.css'

function Carousel({pictures}) {
    console.log(pictures)
    return (
        <div className='carrousel'>
            <img src="https://picsum.photos/200/300" alt="picsum"/>

        </div>
    )
}

export default Carousel

