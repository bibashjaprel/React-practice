import React from 'react';
import "../css/header.css"
import hero from '../images/hero.jpg'

const Header = () => {
  return(
     
      <header className="header" id="home">
    
     <nav className="nav">
      <div className="navigation container">
        <div className="logo">
          <h1>Bibash <span>Ja</span>prel</h1>
        </div>

        <div className="menu">
          <div className="top-nav">
            <div className="logo">
              <h1>Bibash <span>ja</span>prel</h1>
            </div>



            <div className="close">
              <i className="fas fa-times"></i>
            </div>
          </div>

          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link scroll-link">Home</a>
              <a href="#about" className="nav-link scroll-link">About</a>
              <a href="#services" className="nav-link scroll-link">Services</a>
              <a href="#skills" className="nav-link scroll-link">Skills</a>
              <a href="#teams" className="nav-link scroll-link">Teams</a>
              <a href="#contact" className="nav-link scroll-link">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <i className="fas fa-bars"></i>
        </div>
      </div>
       </nav>
      
      <img src={hero} alt="" />
    </header>

  )
};

export default Header;
