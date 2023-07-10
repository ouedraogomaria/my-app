import React from 'react';
import "./Banner.css";

function Banner({title,img}) {
    return (
        <div className="banner" style={{backgroundImage: `url(${img})`}}>
            <h1>{title}</h1>
            <div className='backdrop' ></div>

        </div>

    )
}

export default Banner