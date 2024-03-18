import React, { useState } from 'react';
import './Projects.css';
import Switch from '../Switch/Switch'; 

const Projects = () => {
  const [switchValue, setSwitchValue] = useState('UX/UI');

  const handleSwitchChange = (value) => {
    setSwitchValue(value);
  };

  // Definir la matriz de URL de imágenes y sus respectivos títulos y descripciones
  let projects = [];

  if (switchValue === 'UX/UI') {
    projects = [
      {
        image: "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
        title: "Título del Proyecto 1",
        description: "Descripción del Proyecto 1",
      },
      {
        image: "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
        title: "Título del Proyecto 1",
        description: "Descripción del Proyecto 1",
      },
      {
        image: "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
        title: "Título del Proyecto 1",
        description: "Descripción del Proyecto 1",
      },
      {
        image: "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
        title: "Título del Proyecto 1",
        description: "Descripción del Proyecto 1",
      },
      {
        image: "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
        title: "Título del Proyecto 1",
        description: "Descripción del Proyecto 1",
      },
      {
        image: "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2021/04/B-6.png?fit=1080%2C1080&ssl=1",
        title: "Título del Proyecto 1",
        description: "Descripción del Proyecto 1",
      },
      // Agrega más objetos para cada proyecto
    ];
  } else if (switchValue === 'Front End Dev') {
    projects = [
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto 2",
        description: "Descripción del Proyecto 2",
      },
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto 2",
        description: "Descripción del Proyecto 2",
      },
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto 2",
        description: "Descripción del Proyecto 2",
      },
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto 2",
        description: "Descripción del Proyecto 2",
      },
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto 2",
        description: "Descripción del Proyecto 2",
      },
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto 2",
        description: "Descripción del Proyecto 2",
      },
      // Agrega más objetos para cada proyecto
    ];
  }

  return (
    <div className="project-container" id="projects-component">
      <div className="project">
        <h2 className="project-title">Título del Proyecto</h2>
        <p className="project-description">Descripción del Proyecto</p>
        <Switch className="switcher-project" value={switchValue} onChange={handleSwitchChange} />
        <div className="image-container">
          {/* Mapear las imágenes según el valor del switch */}
          <div className="row row1">
            {projects.map((project, index) => (
              <div className="image-wrapper" key={index}>
                <img src={project.image} alt={`Imagen ${index + 1}`} />
                <div className="image-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
