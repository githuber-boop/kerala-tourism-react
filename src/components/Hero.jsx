import React from 'react'
import Navbar from './Navbar'
import '../styles/Hero.css'


const Hero = () => {
  return (
    <div>
    <header className="hero">
        <div className="container">

            <Navbar/>
            <section id="hero-text">
            <h1>COME AND ENJOY<br /> OUR CULTURE</h1>
            <div className="call-outs">
              <a href="#">Learn More</a>
              <a href="#">Contact Us</a>
            </div>
      </section>
        </div>
  </header>
        
    </div>
  )
}

export default Hero