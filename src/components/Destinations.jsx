import React from 'react'
import '../styles/Destinations.css'
import bekalFort from '../assets/images/bekal-fort.jpg'
import illickal from '../assets/images/illickal.jpg'
import Kolukkumalai from '../assets/images/kollukkumallay.jpg'
import Periyar from '../assets/images/periyar.jpg'


const Destinations = () => {
  return (
    <section className="container destinations">
    <h1 className="title">Top Destinations</h1>
    <div className="destinationGrid">
      <article className="destinationCard">
        <p>Bekal Fort</p>
        <img src={bekalFort} alt="Bekal Fort" />
      </article>
      <article className="destinationCard">
        <p>Illickal Kallu</p>
        <img src={illickal} alt="Illickal Kallu" />
      </article>
      <article className="destinationCard">
        <p>Kolukkumalai</p>
        <img src={Kolukkumalai} alt="Kolukkumalai " />
      </article>
      <article className="destinationCard">
        <p>Periyar</p>
        <img src={Periyar} alt="Periyar" />
      </article>
    </div>
  </section>
  )
}

export default Destinations