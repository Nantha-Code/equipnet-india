import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <header className='top-link'>
        <nav className='link'>
            <img src="https://i.pinimg.com/736x/3b/f3/09/3bf309769cc8c9af9fcfa239e90ccbbf.jpg" alt="logo" />
            <ul className='nav-link-lists'>
                <li> <a href="" className='equipment-tag' onClick={() => navigate("EquipmentList")}>Equipmentslist</a></li>
                <li><a href="" className='register-tag' onClick={() => navigate("Register")}>Register</a></li>
                <li><a href="" className='login-tag' onClick={() =>navigate("Login")}>Login</a></li>
            </ul>
        </nav>
    </header>
    </>
  );
}

export default Navbar;