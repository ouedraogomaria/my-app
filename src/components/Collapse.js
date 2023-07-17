import React from "react";
import React, { useState } from 'react'

const Collapse = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="Collapse-item">
      <div className="Collapse-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="Collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;