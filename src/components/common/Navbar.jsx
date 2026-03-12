import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

function Navbar() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo-container" onClick={() => navigate("/")}>
        <img className="logo" src="/project-logo.png" alt="logo"/>
      </div>

      {/* Hamburger Button */}
      <div 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-link-lists ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className='home-tag'>Home</Link></li>
        <li><Link to="/equipmentlist" className='equipment-tag'>Equipment</Link></li>
        <li><Link to="/register" className='register-tag'>Register</Link></li>
        <li><Link to="/login" className='login-tag'>Login</Link></li>
        <li>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}>
            About
          </a>
        </li>
      </ul>

    </header>
  );
}

export default Navbar;