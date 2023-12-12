import React from 'react';
import Card from '../card/Card';

const cardData = [
  {
    imageSrc: 'src/assets/landing.jpg',
    imageAlt: 'Imagen 1',
    title: 'Sector Turístico',
    description: 'Fotografía y video 4K de locaciones turísticas.',
  },
  {
    imageSrc: 'src/assets/inmobiliario.jpg',
    imageAlt: 'Imagen 2',
    title: 'Sector Inmobiliario',
    description: 'Videos inmobiliarios con tomas aereas y peatonales.',
  },
  {
    imageSrc: 'src/assets/deportes.jpg',
    imageAlt: 'Imagen 3',
    title: 'Deportes',
    description: 'Contenido para diferentes tipos de deportes',
  },
  {
    imageSrc: 'src/assets/proyectosaud.jpg',
    imageAlt: 'Imagen 2',
    title: 'Proyectos Audiovisuales',
    description: 'Poryectos integrales / Contratación solo para tomas aereas',
  },
  {
    imageSrc: 'src/assets/institucionales.jpg',
    imageAlt: 'Imagen 3',
    title: 'Videos Institucionales',
    description: 'Videos para empresas, instituciones y más',
  },
  {
    imageSrc: 'src/assets/loteo.jpg',
    imageAlt: 'Imagen 1',
    title: 'Loteos',
    description: 'Imagenes increibles para mejorar la oferta en loteos',
  },
  // Agregar más objetos para más tarjetas según sea necesario
];

function Cards() {
  return (
    <div className="card-container">
      <h3 className='h3-Cards'>Servicios</h3>
      {cardData.map((data, index) => (
        <Card
          key={index}
          imageSrc={data.imageSrc}
          imageAlt={data.imageAlt}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
}

export default Cards;