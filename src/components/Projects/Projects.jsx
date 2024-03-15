import React, { useState } from 'react';
import './Projects.css';
import Switch from '../../Switch/Switch'; 

const Projects = () => {
  const [switchValue, setSwitchValue] = useState('UX/UI');

  const handleSwitchChange = (value) => {
    setSwitchValue(value);
  };

  // Definir la matriz de URL de imágenes
  const images = [
    "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
    "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
    "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
    "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
    "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
    "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
    "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
    "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
  ];

  return (
    <div className="project-container" id="projects-component">
      <div className="project">
        <h2 className="project-title">Título del Proyecto</h2>
        <p className="project-description">Descripción del Proyecto</p>
        <Switch className="switcher-project" value={switchValue} onChange={handleSwitchChange} />
        <div className="image-container">
          {/* Mapear las imágenes según el valor del switch */}
          <div className="row row1">
            {[...Array(3)].map((_, index) => (
              <img key={index} src={images[index]} alt={`Imagen ${index + 1}`} />
            ))}
          </div>
          <div className="row">
            {[...Array(3)].map((_, index) => (
              <img key={index + 3} src={images[index + 3]} alt={`Imagen ${index + 4}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;