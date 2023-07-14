import React from 'react';

const Accordeon = () => {
  const accordionData = {
    content: `Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. 
    Au cœur de Paris avec 5 lignes de métro et de nombreux bus. 
    Logement parfait pour les voyageurs en solo et les voyageurs d'affaires.
     Vous êtes à1 station de la gare de l'est (7 minutes à pied).`
  };

  const { title, content } = accordionData;

  return (
    <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div>{title}</div>
            <div>
              <i class="fa-solid fa-chevron-up"></i>
            </div>
          </div>
          <div className="accordion-content">{content}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accordeon;