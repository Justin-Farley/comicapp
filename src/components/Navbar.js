// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse-characters">Browse Characters</Link></li>
        <li><Link to="/character-details">Character Details</Link></li>
        <li><Link to="/comics">Comics</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
