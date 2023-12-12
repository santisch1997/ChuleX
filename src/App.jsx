import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import 'jquery';
import About from './components/about/About';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Herramientas from './components/herramientas/Herramientas';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div >
      <Nav /> 
      <About/>
      <Cards/>
      <Herramientas/>
      <Counter/>
      <Footer /> 
    </div>
  );
}

export default App;