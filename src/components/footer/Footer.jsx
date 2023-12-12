import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="redes-sociales">
        <h3>Redes Sociales:</h3>
        <ul>
          <li><a href="#" target="_blank"><img src="src/assets/facebookicon.png" alt="Facebook" /></a></li>
          <li><a href="https://www.linkedin.com/in/santiago-scheuermann-414b59174" target="_blank"><img src="src/assets/linkedinicon.png" alt="Linkedin" /></a></li>
          <li><a href="https://www.instagram.com/chulex_/" target="_blank"><img src="src/assets/instagramicon.png" alt="Instagram" /></a></li>
        </ul>
      </div>
      <div className="contacto">
        <h3>Contacto:</h3>
        <ul>
          <li>
            <img src="/src/assets/whatsapp-icon.png" alt="WhatsApp" />
            <a href="https://wa.link/0hm90e" target="_blank">221 6072310</a>
          </li>
          <li>
            <img src="src/assets/gmail-icon.png" alt="Gmail" />
            <a href="mailto:santisch1997@gmail.com">santisch1997@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;