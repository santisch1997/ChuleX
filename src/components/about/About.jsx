import React from 'react';
import './About.css';

function About() {
  return (
    <div className="QS">
      <img src="src/assets/chulex.png" alt="Imagen chulex QS" className="imagen-chulex-QS" />
      <h4 className="nombre QS">Scheuermann Santiago</h4>
      <p className="descripcion QS">Filmmaker Freelance</p>
      <button className="boton QS boton-QS">Acerca de mi</button>
    </div>
  );
}

export default About;