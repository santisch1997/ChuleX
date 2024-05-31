import React, { useState } from 'react';
import './Projects.css';
import Switch from '../Switch/Switch'; 
import Projects1 from '../../assets/pr1.jpg';
import Projects2 from '../../assets/pr2.jpg';
import Projects3 from '../../assets/pr3.jpg';
import Projects4 from '../../assets/pr4.jpg';
import Projects5 from '../../assets/pr5.jpg';
import Projects6 from '../../assets/pr6.jpg';
import Projects7 from '../../assets/pr7.jpg';
import Projects8 from '../../assets/pr8.jpg';
import Projects9 from '../../assets/pr9.png';
import LinkIcon from '../../assets/link-icon.png';


const Projects = () => {
  const [switchValue, setSwitchValue] = useState('UX/UI');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwitchChange = (value) => {
    setSwitchValue(value);
    setCurrentIndex(0); // Reset to first project when switching
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  let projects = [];

  if (switchValue === 'UX/UI') {
    projects = [
      {
        image: Projects1,
        title: "DARE Mobile App",
        description: "A mobile app to solve the problem when giving and receiving gifts!",
        link: "https://www.behance.net/gallery/192024761/DARE-APP-(UXUI-Design-Project)"
      },
      {
        image: Projects2,
        title: "ARTICO Mobile App",
        description: "Final course project for UX/UI design. An app to connect artists.",
        link: "https://www.behance.net/gallery/161727603/Proyecto-ARTICO-Diseno-UXUI-Coder-House"
      },
      {
        image: Projects3,
        title: "MakeMyPc",
        description: "Design for a PC components e-commerce development project.",
        link: "https://www.behance.net/gallery/189563839/E-Commerce-Project"
      },
      {
        image: Projects4,
        title: "Campaña ST",
        description: "Communication campaign for Santa Tierra Mercado during Easter.",
        link: "https://www.behance.net/gallery/194281981/CAMPANA-PASCUAS-2024-SANTA-TIERRA"
      },
      {
        image: Projects5,
        title: "UX/UI Challenges",
        description: "Different design challenges that I set for myself. PART 1.",
        link: "https://www.behance.net/gallery/190095723/UXUI-Design-Challenges-(1)"
      },
      {
        image: Projects6,
        title: "Diseño de Portfolio",
        description: "Designing my portfolio - Figma.",
      },
    ];
  } else if (switchValue === 'Front End Dev') {
    projects = [
      {
        image: Projects3,
        title: "MakeMyPc",
        description: "Front-End development of an e-commerce store for PC component sales.",
        link: "https://p-final-p-ccorp-front.vercel.app/catalogo"
      },
      {
        image: Projects7,
        title: "Drivers App",
        description: "Individual project for Full Stack Dev Bootcamp. SPA with the best information about F1 racers.",
      },
      {
        image: Projects6,
        title: "Desarrollo de Portfolio",
        description: "Development of personal portfolio with React + Vite, Tailwind, and Daisy UI.",
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
  } else if (switchValue === 'No-Code') {
    projects = [
      {
        image: Projects8,
        title: "Lo de Jorge",
        description: "Website for a meet specialist restaurant of La Plata (Argentina)",
        link: "https://mediumvioletred-kudu-191553.hostingersite.com/"

      },
      {
        image: Projects9,
        title: "Giomila",
        description: "E-commerce for an elegant-sport clothes brand that came from Italy to Argentina",
        link: "https://www.giomila.com.ar"

      },
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto",
        description: "Descripción del Proyecto",
      },
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto",
        description: "Descripción del Proyecto",
      },
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto",
        description: "Descripción del Proyecto",
      },
      {
        image: "https://images.wallpaperscraft.com/image/single/chip_circuit_processor_140251_300x168.jpg",
        title: "Título del Proyecto",
        description: "Descripción del Proyecto",
      },
    ];
  }

  return (
    <div className="project-container" id="projects-component">
      <div className="project">
        <h2 className="project-title">My Projects</h2>
        <p className="project-description">Here you can find my latest projects!</p>
        <Switch className="switcher-project" value={switchValue} onChange={handleSwitchChange} />
        <div className="image-container desktop-view">
          <div className="row row1">
            {projects.map((project, index) => (
              <div className="image-wrapper" key={index}>
                <img src={project.image} alt={`Imagen ${index + 1}`} />
                <div className="image-overlay">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="link-button">
                        <img className="link-icon" src={LinkIcon} alt="Link Icon" />
                      </button>
                    </a>
                  )}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mobile-controls">
          <button className="arrow-button prev" onClick={handlePrev}>&#9664;</button>
          <div className="mobile-project">
            <img src={projects[currentIndex].image} alt={`Imagen ${currentIndex + 1}`} />
            <div className="image-overlay">
              {projects[currentIndex].link && (
                <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                  <button className="link-button">
                    <img className="link-icon" src={LinkIcon} alt="Link Icon" />
                  </button>
                </a>
              )}
              <h3>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
            </div>
          </div>
          <button className="arrow-button next" onClick={handleNext}>&#9654;</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
