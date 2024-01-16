import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/event" className="nav-link">Event</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/certificate" className="nav-link">Certificate</Link>
      <Link to="/xyg" className="nav-link">XYG</Link>

      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
