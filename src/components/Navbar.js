import React from 'react';
import './Navbar.css'; // Import the CSS for Navbar
import { FaUser, FaHeart, FaBars } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/website-logo.png" alt="App Logo" />
      </div>
      <div className="navbar-icons">

        <FaBars className="icon" /> 

        <hr className="vertical-hr" />

        <FaHeart className="icon" />


        <hr className="vertical-hr" />

        <FaUser className="icon" />
          <select className="user-name">
            <option value="RE User Name">RE User Name</option>
            <option value="Guest">Guest</option>
        </select>
        
      </div>
    </nav>
  );
};


export default Navbar;


  