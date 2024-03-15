import React from 'react';
import Navigation from '../components/nav/Nav'; // Importa la barra de navegación Nav.jsx
import Footer from '../components/footer/Footer';
import PhotoCollage from '../components/photocollage/PhotoCollage';

const PortfolioChulexView = () => {
  // Agregar la clase específica al cuerpo de la página
  document.body.classList.add('chulex-body');

  return (
    <div>
      <Navigation className="main-nav" /> {/* Utiliza la barra de navegación Nav.jsx con el mismo className */}
      <PhotoCollage />
      <Footer />
    </div>
  );
}

export default PortfolioChulexView;