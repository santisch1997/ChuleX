import React from 'react';
import './Nav2.css'; // Asegúrate de tener el archivo de estilos para el Navbar
import About2 from '../about/About2'; // Importa el componente About2
import Projects from '../Projects/Projects'; // Importa el componente Projects

const Navigation = () => {
  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about-component');
    aboutElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects-component');
    projectsElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="portfolio-nav" style={{ backgroundColor: '#003747' }}>
      <button onClick={scrollToAbout}>About</button>
      <button >My Skills</button>
      <button onClick={scrollToProjects}>Projects</button>
    </nav>
  );
}

export default Navigation;