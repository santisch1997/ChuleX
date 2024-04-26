import React from 'react';
import './Herramientas.css';
import imagenDrone from '../../assets/equipos-drone-gif.gif';
import imagenGimball from '../../assets/equipos-gimball.png';
import imagenInsta360 from '../../assets/insta360.png';
import imageniPhone from '../../assets/iphone14.png';

function Herramientas() {
  return (
    <div className="herramientas-section">
      <h2 className="herramientas-title">Herramientas</h2>
      <p className="herramientas-description">Estos son los equipos de trabajo con los cuales trabajo.</p>
      <div className="herramientas-images">
        <div className="tool">
          <div className="tool-content">
            <img src={imagenDrone} alt="DJI Mavic Air 2" className="drone-image" />
            <h4 className="herramientas-h4">DJI Mavic Air 2</h4>
          </div>
        </div>
        <div className="tool">
          <div className="tool-content">
            <img src={imagenGimball} alt="DJI Gimball OM4" className="gimbal-image" />
            <h4 className="herramientas-h4">DJI Gimball OM4</h4>
          </div>
        </div>
        <div className="tool">
          <div className="tool-content">
            <img src={imagenInsta360} alt="Insta 360 X3" className="insta360-image" />
            <h4 className="herramientas-h4">Insta 360 X3</h4>
          </div>
        </div>
        <div className="tool">
          <div className="tool-content">
            <img src={imageniPhone} alt="iPhone 14 Pro" className="iphone-image" />
            <h4 className="herramientas-h4">iPhone 14 Pro</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herramientas;
