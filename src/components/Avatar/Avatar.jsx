import React from 'react';
import './Avatar.css';
import avatarImage from '../../assets/chulex1.png';
import downloadIcon from '../../assets/icon-descarga.png';
import socialIcon1 from '../../assets/social-icon1.png';
import socialIcon2 from '../../assets/social-icon2.png';
import socialIcon3 from '../../assets/social-icon3.png';
import socialIcon4 from '../../assets/social-icon4.png';
import socialIcon5 from '../../assets/social-icon5.png';

const Avatar = ({ src, alt }) => {
  // Función para manejar el clic en el botón de descarga
  const handleDownload = () => {
    // Abrir el enlace en una nueva pestaña
    window.open('https://drive.google.com/file/d/1C_kooU0CULMXnbkNdMu5ONOes1e7XUCH/view?usp=sharing', '_blank');
  };

  // Función para manejar el clic en el botón "About Me"
  const handleScrollToAbout = () => {
    const aboutElement = document.getElementById('about2-container'); // Obtiene el elemento del componente About2.jsx
    aboutElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Hace scroll suavemente hacia el componente About2.jsx
  };

  // Función para abrir los enlaces de los botones redondos en nuevas pestañas
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="avatar-container">
      <div className="avatar-text">
        <p className="greeting">Hi there,</p>
        <p className="greeting">I'm <span className="santiago">Santiago</span></p>
        <div className="button-container">
          {/* Agrega el evento onClick para hacer scroll hacia el componente About2.jsx */}
          <button className="btn btn-about-me" onClick={handleScrollToAbout}>About Me</button>
          {/* Utiliza un <a> en lugar de un <button> para el botón de descarga */}
          <a href="#" className="btn btn-download" onClick={handleDownload} target="_blank" rel="noopener noreferrer">
            <img src={downloadIcon} alt="Download Icon" className="icon" /> {/* Usa el icono de descarga */}
            Download CV
          </a>
        </div>
        {/* Agrega la fila de botones circulares */}
        <div className="circle-buttons">
          <button className="btn btn-circle" onClick={() => openLinkInNewTab('https://www.linkedin.com/in/santiago-scheuermann-414b59174/')}>
            <img src={socialIcon1} alt="Social Icon 1" className="social-icon" />
          </button>
          <button className="btn btn-circle" onClick={() => openLinkInNewTab('https://www.behance.net/santiagscheuer')}>
            <img src={socialIcon2} alt="Social Icon 2" className="social-icon" />
          </button>
          <button className="btn btn-circle" onClick={() => openLinkInNewTab('https://github.com/santisch1997')}>
            <img src={socialIcon3} alt="Social Icon 3" className="social-icon" />
          </button>
          <button className="btn btn-circle" onClick={() => openLinkInNewTab('https://linktr.ee/SantiagoScheuermann')}>
            <img src={socialIcon4} alt="Social Icon 4" className="social-icon" />
          </button>
          <button className="btn btn-circle" onClick={() => openLinkInNewTab('mailto:santisch1997@gmail.com')}>
             <img src={socialIcon5} alt="Social Icon 5" className="social-icon" />
            </button>
        </div>
      </div>
      <div className="gradient-circle"></div>
      <img src={avatarImage} alt={alt} className="avatar-img" />
    </div>
  );
}

export default Avatar;