import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import './Carousel.css'; // Asegúrate de tener la ruta correcta aquí

const MyCarousel = () => {
  return (
    <div>
      <h2 className="Carousel-title">Additional Information</h2>
      <div className="container-drone-centered">
        <div className="carousel-container relative">
          <Carousel
            interval={null}
            fade
            className="z-0"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
              <div className="carousel-caption"></div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
              <div className="carousel-caption"></div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
              <div className="carousel-caption"></div>
            </Carousel.Item>
          </Carousel>
          <div className="overlay-drone">
            <h3 className="overlay-title">I´m Drone Pilot</h3>
            <p className="overlay-description">Explore my portfolio of filmmaking projects on Instagram or my dedicated ChuleX portfolio.</p>
            <Button variant="primary" className="overlay-button1" href='https://www.instagram.com/chulex_/' target='blank'>Instagram</Button>
            <Button variant="primary" className="overlay-button1" href='http://localhost:5173/chulex' target='blank'>Portfolio</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
