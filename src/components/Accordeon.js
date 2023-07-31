import React, {useState} from 'react';

import '../components/Accordeon.css'

const Accordeon = (props) => {
 const [open,setOpen] = useState(true);
  return (
    <div className='description'>
        <div className='description_detail'>
          <h3>{props.title}</h3>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title">
                <div className='accordion-icon'>
                  <i onClick={()=>{ 
                    open == true ? setOpen(false) : setOpen(true)
                    }} className= {'fa-solid ' + (open == true ? 'fa-chevron-up' : 'fa-chevron-down')}>

                  </i>
                </div>
              </div>
            </div>
          </div>

        </div>
          { open && props.children }             
                  
    </div>
    
  );
};

export default Accordeon;