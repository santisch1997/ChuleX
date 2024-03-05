import React from 'react';

const PortfolioView = () => {
  const handleClick = () => {
    window.open('/chulex'); 
  };

  return (
    <div>
      <button onClick={handleClick}>ChuleX</button>
    </div>
  );
}

export default PortfolioView;