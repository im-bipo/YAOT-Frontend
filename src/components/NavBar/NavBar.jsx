import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import profile from '../../assets/img/Edit Profile.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo'>YAOT</div>
      <div className='nav-items'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/event" className="nav-link">Event</Link>
      <Link to="/services" className="nav-link">Services</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/xyg" className="editprofile">
        <img src={profile} alt="" />
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
