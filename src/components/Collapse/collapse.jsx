import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse collapse-arrow bg-base-200 ${className || ''} ${isOpen ? 'open' : ''}`}>
      <div className="collapse-title text-xl font-medium" onClick={toggleCollapse}>
        {title}
      </div>
      <div className="collapse-content">
        {isOpen && (
          <ul>
            {React.Children.map(children, (child, index) => (
              <li className="item-collapse" key={index}>{child}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Collapse;