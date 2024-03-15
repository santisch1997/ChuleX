import React from 'react';
import Nav from '../components/nav/Nav2';
import { ThemeSwitcher } from '../components/ThemeSwitcher/ThemeSwitcher';
import { ThemeProvider } from '../components/ThemeSwitcher/ThemeProvider';
import { ToggleSwitch } from '../components/ThemeSwitcher/ToggleSwitcher';
import Avatar from '../components/Avatar/Avatar';
import Techs from '../components/Techs/Techs';
import About2 from '../components/about/About2';
import Projects from '../components/Projects/Projects';





const PortfolioView = () => {
  const handleClick = () => {
    window.open('/chulex'); 
  };

  return (
    <div>
     <ThemeProvider>
      
        <Nav className="portfolio-nav" />
        <Avatar />
        <Techs />
        <About2 />
        <Projects />



        
        {/* <ThemeSwitcher/>
        <ToggleSwitch /> */}

      
    </ThemeProvider>

    </div>
  );
}

export default PortfolioView;