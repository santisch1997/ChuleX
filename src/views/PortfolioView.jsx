import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import PhotoCollage from '../components/photocollage/PhotoCollage';

const PortfolioView = () => {
  return (
    <div>
      <Nav className="portfolio-nav" />
      <PhotoCollage />
      <Footer />
    </div>
  );
}

export default PortfolioView;