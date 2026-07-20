import React from 'react'
import "../assets/CSS/Navbar.css";
import ngo_logo from "../assets/Images/ngo_logo.jpeg";

import { FaHeart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Navbar = () =>{
  return (
    <>
    <header className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={ngo_logo} alt="Logo" className="logo" />
        <div className="logo-text">
          <h3>Jagruti Foundation</h3>
          <p>Empowering lives through skill, care and compassion.</p>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Programs</li>
          <li>Blog & News</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      {/* Right Side */}
      <div className="right-side">
        <button className="donate-btn">
          <FaHeart />
          Donate
        </button>
        <div className="globe">
          <FaGlobe />
        </div>
      </div>
    </header>
    </>
  );
}

export default Navbar;