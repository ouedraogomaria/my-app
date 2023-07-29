import React from 'react';
import './Footer.css'

function Footer(props) {
    return (
        <div className='footer'>
            <div className='logo_footer'>
                <img src={props.logofooter} alt='logo footer' />
            </div>
            <div className='text_footer'> © 2020 Kasa.All rights reserved </div>
            
        </div>
    )
}

export default Footer