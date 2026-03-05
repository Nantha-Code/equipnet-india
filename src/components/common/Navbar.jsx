import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

function Navbar() {

  const navigate = useNavigate();
  return (
    <>
        <header>
          <div className="logo-container" onClick={() =>navigate("/")}>
            <img className="logo" onClick={() =>navigate("/")} src="public/images/project-logo.png" alt="logo"/>
          </div>
            <ul className='nav-link-lists'>
              <li><Link to="/" className='home-tag'>Home</Link></li>
              <li><Link to="/equipmentlist" className='equipment-tag'>Equipment</Link></li>
              <li><Link to="/register" className='register-tag'>Register</Link></li>
              <li><Link to="/login" className='login-tag'>Login</Link></li>
              <li>
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}>About
                </a>
              </li> 
            </ul>
        </header>
    </>
  );
}

export default Navbar;