import React from 'react';
import "./DescriptionAbout.css"
import Accordeon from './Accordeon';

function DescriptionAbout() {
    return (
        <div className="description">
            <h3>Description</h3>
            <Accordeon/>
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements,
                et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
        </div>
    

    )
}

export default DescriptionAbout