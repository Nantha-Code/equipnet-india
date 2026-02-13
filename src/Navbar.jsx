import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <header className='top-link'>
        <nav className='link'>
            <img src="https://i.pinimg.com/736x/3b/f3/09/3bf309769cc8c9af9fcfa239e90ccbbf.jpg" alt="logo" />
            <ul>
                <li> <a href="">Equipment</a></li>
                <li><a href="">Register</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    </header>
    </>
  );
}

export default Navbar;