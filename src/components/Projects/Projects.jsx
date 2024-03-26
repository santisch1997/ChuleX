import React, { useState } from 'react';
import './Projects.css';
import Switch from '../Switch/Switch'; 
import Projects1 from '../../assets/pr1.jpg'
import Projects2 from '../../assets/pr2.jpg'
import Projects3 from '../../assets/pr3.jpg'
import Projects4 from '../../assets/pr4.jpg'
import Projects5 from '../../assets/pr5.jpg'
import Projects6 from '../../assets/pr6.jpg'
import Projects7 from '../../assets/pr7.jpg'






const Projects = () => {
  const [switchValue, setSwitchValue] = useState('UX/UI');

  const handleSwitchChange = (value) => {
    setSwitchValue(value);
  };

  let projects = [];

  if (switchValue === 'UX/UI') {
    projects = [
      {
        image: Projects1,
        title: "DARE Mobile App",
        description: "Una app para solucionar el problema a la hora de hacer y recibir regalos !",
      },
      {
        image: Projects2,
        title: "ARTICO Mobile App",
        description: "Proyecto Final de curso de diseño UX/UI. Una app para conectar artistas.",
      },
      {
        image: Projects3,
        title: "MakeMyPc",
        description: "Diseño para un proyecto de desarrollo de un e-commerce de componentes de pc.",
      },
      {
        image: Projects4,
        title: "Campaña ST",
        description: "Campaña de comunicación para Santa Tierra Mercado en Pascuas.",
      },
      {
        image: Projects5,
        title: "UX/UI Challenges",
        description: "Diferentes desafios de diseño que me propongo. PARTE 1.",
      },
      {
        image: Projects6,
        title: "Diseño de Portfolio",
        description: "Diseño de mi portfolio - Figma.",
      },
   
    ];
  } else if (switchValue === 'Front End Dev') {
    projects = [
      {
        image: Projects3,
        title: "MakeMyPc",
        description: "Desarrollo Front-End de tienda e-commerce para venta de componentes de pc.",
      },
      {
        image: Projects7,
        title: "Drivers App",
        description: "Proyecto individual para Bootcamp Full Stack Dev. SPA con la mejor información acerca de corredores de F1.",
      },
      {
        image: Projects6,
        title: "Desarrollo de Portfolio",
        description: "Desarrollo de portfolio personal con React + Vite, Tailwind y Daisy UI.",
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
    ];
  }

  return (
    <div className="project-container" id="projects-component">
      <div className="project">
        <h2 className="project-title">Mis Proyectos</h2>
        <p className="project-description">Aquí puedes encontrar mis últimos proyectos !</p>
        <Switch className="switcher-project" value={switchValue} onChange={handleSwitchChange} />
        <div className="image-container">
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

