import React from 'react';
import About from '../components/about/About';
import Cards from '../components/cards/Cards';
import Nav2 from '../components/nav/Nav2';
import Footer from '../components/footer/Footer';
import Herramientas from '../components/herramientas/Herramientas';
import Counter from '../components/counter/Counter';
import backgroundImage from '../assets/landing.jpg';
import droneIcon from '../assets/drone.png';


const ChulexView = () => {
  document.body.classList.add('chulex-body');

  return (
    <div>
      <img src={backgroundImage} alt="Fondo" className="background-image" />
      <img src={droneIcon} alt="Icono de Drone" className="icono-drone" />
        <Nav2 />
        <About />
        <Cards />
        <Herramientas />
        <Counter />
        <Footer />
      </div>
    );
  }
  
  export default ChulexView;