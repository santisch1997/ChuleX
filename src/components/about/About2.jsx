import React from 'react';
import './About2.css';


const About2 = () => {
  return (
    <div  id="about-component"> 
      <div className="about2-card">
        <h2 className="card-title">About Me</h2>
        <p className="subtitleabout2" >I´m a UX/UI Designer and a Front-End Developer from Buenos Aires, Argentina.</p>
        <p className="last-paragraph-About2">I thoroughly enjoy working on enhancing user experiences and have a keen interest in technology. My passion lies in creating and developing attractive interfaces that not only are visually pleasing but also provide effective and meaningful solutions for users.
In terms of my objectives, my primary goal has always been to have the tools for both designing and developing digital products. I aim to make a significant contribution to the field while continuously learning and advancing in my professional career.</p>
      </div>
    </div>
  );
}

const MyComponent = () => {
  return (
    <div id="my-unique-id">
      <About2 />
    </div>
  );
}

export default MyComponent;