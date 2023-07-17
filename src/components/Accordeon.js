import React from 'react';
import '../components/Accordeon.css'
const Accordeon = () => {
  
  return (
    <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div className='accordion-icon'>
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>

        </div>
      </div>
      
    </React.Fragment>
  );
  
};

export default Accordeon;