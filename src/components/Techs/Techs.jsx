import React from 'react';
import './Techs.css';
import techIcon1 from '../../assets/tech-icons/tech-icon1.png';
import techIcon2 from '../../assets/tech-icons/tech-icon2.png';
import techIcon3 from '../../assets/tech-icons/tech-icon3.png';
import techIcon4 from '../../assets/tech-icons/tech-icon4.png';
import techIcon5 from '../../assets/tech-icons/tech-icon5.png';
import techIcon6 from '../../assets/tech-icons/tech-icon6.png';
import techIcon7 from '../../assets/tech-icons/tech-icon7.png';
import techIcon8 from '../../assets/tech-icons/tech-icon8.png';
import techIcon9 from '../../assets/tech-icons/tech-icon9.png';
import techIcon10 from '../../assets/tech-icons/tech-icon10.png';
import techIcon11 from '../../assets/tech-icons/tech-icon11.png';
import techIcon12 from '../../assets/tech-icons/tech-icon12.png';

const Techs = () => {
  return (
    <div className="techs-container">
      <p className="techs-heading">Technologies</p>
      <div className="row">
        {renderTechSquares(1, 6)}
      </div>
      <div className="row">
        {renderTechSquares(7, 12)}
      </div>
    </div>
  );
}

const renderTechSquares = (start, end) => {
  const techSquares = [];
  for (let i = start; i <= end; i++) {
    const icon = getTechIcon(i);
    const tooltipText = getTooltipText(i); // Obtén el texto del tooltip
    techSquares.push(
      <div className="tech-square" key={i} title={tooltipText}>
        <img src={icon} alt={`Tech Icon ${i}`} className="tech-icon" />
      </div>
    );
  }
  return techSquares;
}

const getTechIcon = (index) => {
  switch (index) {
    case 1:
      return techIcon1;
    case 2:
      return techIcon2;
    case 3:
      return techIcon3;
    case 4:
      return techIcon4;
    case 5:
      return techIcon5;
    case 6:
      return techIcon6;
    case 7:
      return techIcon7;
    case 8:
      return techIcon8;
    case 9:
      return techIcon9;
    case 10:
      return techIcon10;
    case 11:
      return techIcon11;
    case 12:
      return techIcon12;
    default:
      return null;
  }
}

const getTooltipText = (index) => {
  switch (index) {
    case 1:
      return "React";
    case 2:
      return "JavaScript";
    case 3:
      return "Figma";
    case 4:
      return "Redux";
    case 5:
      return "HTML";
    case 6:
      return "CSS";
    case 7:
      return "Bootstrap";
    case 8:
      return "Tailwind";
    case 9:
      return "Miro";
    case 10:
      return "Node.js";
    case 11:
      return "Express";
    case 12:
      return "SQL";
    default:
      return null;
  }
}

export default Techs;