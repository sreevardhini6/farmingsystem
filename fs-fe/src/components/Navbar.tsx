import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>Farm-to-Table</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
