import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/images/kerala-tourism-logo.png'


const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li className="nav-link bottomHover">
            <a href="#">Home</a>
          </li>
          <li className="nav-link bottomHover">
            <a href="#">Districts</a>
          </li>
          <li className="nav-link bottomHover">
            <a href="#">About Us</a>
          </li>
          <li className="nav-link">
            <button className="callOut">
              <a href="#">Login</a>
            </button>
          </li>
          <li className="nav-link">
            <button className="callOut backgroundGreen">
              <a href="#">Sign Up</a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar