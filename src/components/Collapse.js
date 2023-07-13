import React, { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="collapse-item">
      <div className="collapse-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;