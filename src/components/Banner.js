import React from 'react';
import "./Banner.css";

function Banner({title,img, classCss}) {
    return (
        <div className={classCss} style={{backgroundImage: `url(${img})`}}>
            <h1>{title}</h1>
            <div className='backdrop' ></div>

        </div>

    )
}

export default Banner