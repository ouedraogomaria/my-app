import React,{useState} from 'react';
import '../components/Carousel.css'
import CarouselPicture from './CarouselPicture';

function Carousel({pictures}) {
    const [activePicture, setActivePicture] = useState(0);

    const carouselNextPicture = () =>{
        if(activePicture +1 === pictures.length){
            return setActivePicture(0)
        }
        return setActivePicture(activePicture + 1)
    }
    const carouselPrevPicture = () =>{
        if(activePicture -1 < 0){
            return setActivePicture(pictures.length -1)
        }
        return setActivePicture(activePicture -1)
    }

    return (
        <div className='carousel'>
            <CarouselPicture picture={pictures[activePicture]}/>
            {pictures.length >1 &&
                <>
                    <button className='btn_prev' onClick={carouselPrevPicture}><i className="fas fa-chevron-left"></i></button>
                    <button className='btn_next' onClick={carouselNextPicture}><i className="fas fa-chevron-right"></i></button>
                </>   
            }
            <span>{activePicture +1}/{pictures.length}</span>
        </div>
    )
}

export default Carousel

