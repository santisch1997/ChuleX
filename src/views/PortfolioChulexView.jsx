import React from 'react';
import NavChulex from '../components/nav/NavChulex'; // Corregir la ruta de importación
import Footer from '../components/footer/Footer';
import PhotoCollage from '../components/photocollage/PhotoCollage';

const PortfolioChulexView = () => {
  // Agregar la clase específica al cuerpo de la página
  document.body.classList.add('chulex-body');

  return (
    <div>
      <NavChulex />
      <PhotoCollage />
      <Footer />
    </div>
  );
}

export default PortfolioChulexView;