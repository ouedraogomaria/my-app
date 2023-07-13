import React from 'react';
import arrow_back_ios from '../assets/arrow_back_ios-24px 1.png'

const Accordeon = () => {
  const accordionData = {
    title: 'Description',
    content: `Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. 
    Au cœur de Paris avec 5 lignes de métro et de nombreux bus. 
    Logement parfait pour les voyageurs en solo et les voyageurs d'affaires.
     Vous êtes à1 station de la gare de l'est (7 minutes à pied).`
  };

  const { title, content } = accordionData;

  return (
    <React.Fragment>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div>{title}</div>
            <div>
              <img src={arrow_back_ios} alt=''/>
            </div>
          </div>
          <div className="accordion-content">{content}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accordeon;