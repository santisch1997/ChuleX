import React from 'react';
import Nav from '../components/nav/Nav2';
import { ThemeProvider } from '../components/ThemeSwitcher/ThemeProvider';
import Avatar from '../components/Avatar/Avatar';
import Techs from '../components/Techs/Techs';
import About2 from '../components/about/About2';
import Projects from '../components/Projects/Projects';
import Collapse from '../components/Collapse/collapse';
import Carousel  from '../components/carousel/Carousel';
import Footer2 from '../components/footer/Footer2';
import Brands from '../components/Brands/brands';



const PortfolioView = () => {
  return (
    <ThemeProvider>
      <Nav className="portfolio-nav" />
      <Avatar />
      
      <Techs />
      <About2 />

      <div title="Skills" id="skills-component" className="title-myskills card-title">My Skills</div>

      {/* Primer Collapse */}
      <Collapse title="UX/UI Design">
        <ul>
          <li>Figma (advanced)</li>
          <li>DCU / Design Thinking</li>
          <li>UX Research</li>
          <li>User Personas / Benchmarking</li>
          <li>Information Architecture</li>
          <li>Userflows</li>
          <li>Wireframing</li>
          <li>Design Patterns & Design Systems</li>
          <li>Atomic Design</li>
          <li>Heuristic Evaluations</li>
          <li>Prototyping</li>
        </ul>
      </Collapse>

      {/* Segundo Collapse */}
      <Collapse title="Front-End Development">
        <ul>
          <li>Web Design</li>
          <li>HTML / CSS</li>
          <li>Styled Components</li>
          <li>Javascript</li>
          <li>React + Redux</li>
          <li>Bootstrap & Tailwind</li>
          <li>WordPress</li>
          <li>Prestashop</li>
          <li>Tienda Nube</li>
        </ul>
      </Collapse>

      <Collapse title="Soft Skills">
        <ul>
          <li>Creativity</li>
          <li>Problem Solving</li>
          <li>Team Work</li>
          <li>Empathy</li>
          <li>Communication</li>
        </ul>
      </Collapse>

      <Collapse title="Languages">
        <ul>
          <li>Spanish (Native)</li>
          <li>English (Advanced C1)</li>
          <li>Portuguese (Intermediate - Semi Advanced)</li>
         
        </ul>
      </Collapse>

      <Projects />
      <Brands/>

      <Carousel/>

      <Footer2/>


    </ThemeProvider>
  );
}

export default PortfolioView;
