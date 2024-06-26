import React from 'react';
import './Footer2.css';
import WSPicon from '../../assets/whatsapp.png';
import GMAILicon from '../../assets/gmail.png';
import LINKEDINicon from '../../assets/linkedin.png';

const Footer2 = () => {
  return (
    <footer className="footer2-container p-10 flex justify-center items-center flex-col" style={{backgroundColor: "#00141F", color: "#fff"}}>
  <nav className="mb-4 nav-footer">
        <a href="https://wa.link/8raoja" target="_blank" rel="noopener noreferrer">
          <img src={WSPicon} alt="WhatsApp" className="footer-icon" />
        </a>
        <a href="mailto:santisch1997@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={GMAILicon} alt="Gmail" className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/santiago-scheuermann-414b59174/" target="_blank" rel="noopener noreferrer">
          <img src={LINKEDINicon} alt="LinkedIn" className="footer-icon" />
        </a>
      </nav>
      <aside className="text-centerofooter">
        <p className="font-bold">
          Santiago Scheuermann - Portfolio
        </p> 
        <p>⚡ Designed and developed by me ⚡</p>
      </aside> 
    </footer>
  );
};

export default Footer2;
