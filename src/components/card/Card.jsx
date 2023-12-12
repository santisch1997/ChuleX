import React from 'react';
import './Card.css'

function Card({ imageSrc, imageAlt, title, description }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={imageAlt} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;



