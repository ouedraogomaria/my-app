import React,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ApartmentPage.css'
import Carousel from '../components/Carousel';
import ApartmentTitle from '../components/ApartmentTitle';
import ApartmentHost from '../components/ApartmentHost';
import apartments from '../datas/Logement.json'
import { useParams } from 'react-router-dom';
import Accordeon from '../components/Accordeon';
import ApartmentRate from '../components/ApartmentRate';
import ApartmentTag from '../components/ApartmentTag';

function ApartmentPage() {
    //const apartment= apartments[0] 
    const  {flatId} = useParams();
    console.log(flatId)

    const apartment = apartments.find((apartment) => apartment.id === flatId);
    console.log(apartment)
    return (
        <div>
           <div className='apartmentpage'>
                <Navbar />
                <Carousel pictures={ apartment.pictures} />
                <div className='apartment1'>
                    <div className='apartment_title_tag'>
                        <ApartmentTitle title ={apartment.title}  location= {apartment.location}/>
                        <div className='tags'>
                        {
                            apartment.tags.map((tag) => 
                                <ApartmentTag tag={tag} key={tag}/>)
                        }
                        </div>  
                    </div>
                    <div className='apartment_proprietor_rate'>
                        <ApartmentHost name={apartment.host.name} picture={apartment.host.picture}/>
                        <ApartmentRate rating={apartment.rating} />
                    </div>
                </div>
                <div className='apartment_description'>
                    <div className='apartment_content'>
                        <Accordeon title='Description'>
                            <p className='detail_description'>
                                {apartment.description}
                            </p>
                        </Accordeon>
                    </div>
                    <div className='apartment_content'>
                        <Accordeon title='Équipements'>
                            <ul className='detail_equipement'>
                                {apartment.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
                                
                            </ul>
                        </Accordeon>
                    </div>
                </div>
           </div>
           <Footer/>
        </div>
    )
}

export default ApartmentPage