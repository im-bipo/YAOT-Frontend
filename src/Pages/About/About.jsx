// About.jsx
import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p className="sub-heading">Discover Our Story and Mission</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <p>
            Welcome to our website, where innovation meets passion. We are a team of dedicated
            individuals striving to make a positive impact in the world of technology and beyond.
          </p>
          <p>
            Our mission is to provide valuable resources, foster creativity, and build a community
            where ideas flourish. We believe in the power of collaboration and the potential to
            create something extraordinary when talented individuals come together.
          </p>
        </div>

        <div className="about-image">
          <img src="https://placekitten.com/600/400" alt="About Us" />
        </div>
      </section>
    </div>
  );
};

export default About;
