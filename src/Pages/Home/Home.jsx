// Home.jsx
import React from 'react';
import './Home.scss';
import FeaturedCard from './Components/FeaturedCard';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Website!</h1>
        <p className="sub-heading">Explore the Latest Updates and Events</p>
      </header>

      <section className="featured-section">
        <h2>Featured Content</h2>
        <div className="featured-cards">
          {/* Featured card 1 */}
          <FeaturedCard 
          title = 'Exciting Event'
          status = 'pending'
          author = 'falano'
          rating = '4'
          />
          <FeaturedCard 
          title = 'Exciting Event'
          status = 'pending'
          author = 'falano'
          rating = '4'
          />
          <FeaturedCard 
          title = 'Exciting Event'
          status = 'pending'
          author = 'falano'
          rating = '4'
          />
          <FeaturedCard 
          title = 'Exciting Event'
          status = 'pending'
          author = 'falano'
          rating = '4'
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
