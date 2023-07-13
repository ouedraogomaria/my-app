import React from 'react';
import '../components/Carrousel.css'

function Carrousel({pictures}) {
    console.log(pictures)
    return (
        <div className='carrousel'>
            <img src="https://picsum.photos/200/300" alt="picsum"/>

        </div>
    )
}

export default Carrousel