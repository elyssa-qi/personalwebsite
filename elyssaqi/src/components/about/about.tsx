import React from 'react';
import './about.css';

const About: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <h4 className="greeting">👋 Hey! I'm Elyssa Qi.</h4>
            <p>Currently a first year student studying Systems Design Engineering at the University of Waterloo. I am passionate about building at the intersection of Software and Design. My hobbies include playing volleyball, trying new food, and spending time with family & friends. </p>
          </div>
        </div>
    </section>
  );
};

export default About;