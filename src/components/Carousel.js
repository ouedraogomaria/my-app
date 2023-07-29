import React,{useState} from 'react';
import '../components/Carousel.css'
import CarouselPicture from './CarouselPicture';

function Carousel({pictures}) {
    const [activePicture, setActivePicture] = useState(0);

    const carouselNextPicture = () =>{
        if(activePicture +1 === pictures.length - 1){
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
            
            <button onClick={carouselNextPicture}><i className="fa-solid fa-chevron-left"></i></button>
            <button  onClick={carouselPrevPicture}><i className="fa-solid fa-chevron-right"></i></button>
            

        </div>
    )
}

export default Carousel

