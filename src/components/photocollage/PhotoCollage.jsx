import React from 'react';
import './PhotoCollage.css';

const imagePaths = [
  'src/assets/landing.jpg',
  'src/assets/inmobiliario.jpg',
  'src/assets/deportes.jpg',
  'src/assets/proyectosaud.jpg',
  'src/assets/institucionales.jpg',
  'src/assets/loteo.jpg',
];

const PhotoCollage = () => {
  return (
    <div className="photo-collage-container">
      <div className="main">
        {imagePaths.map((path, index) => (
          <div key={index} className="photo-collage-image">
            <div className="overlay">
              <button className="view-more">Ver más</button>
              <div className="text-overlay">Turismo</div>
            </div>
            <img src={path} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoCollage;
