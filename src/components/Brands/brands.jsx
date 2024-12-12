import React from 'react';
import './brands.css';
import logo1 from '../../assets/brand-logos/logo1.png';
import logo2 from '../../assets/brand-logos/logo2.png';
import logo3 from '../../assets/brand-logos/logo3.png';
import logo4 from '../../assets/brand-logos/logo4.png';
import Logo5 from '../../assets/brand-logos/Logo5.png';


// Importa más logos según sea necesario

const Brands = () => {
  const logos = [logo1, logo2, logo3, logo4, Logo5 /* agregar más logos aquí */];

  return (
    <div className="brands-container">
      <h2 className="brands-title">Brands That Trust Me</h2>
      <div className="brands-logos">
        {[...Array(1)].map((_, rowIndex) => (
          <div className="logo-row" key={rowIndex}>
            {logos.map((logo, colIndex) => (
              <img src={logo} alt={`Brand Logo ${colIndex}`} className="brand-logo" key={colIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
