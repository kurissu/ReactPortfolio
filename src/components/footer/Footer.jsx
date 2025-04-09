import React from 'react'
import './footer.css'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className='footer__logo'>Kris Tantinirundr</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
{/* 
      <div className="footer__socials">
        <a href=""></a>
      </div> */}

      <div className="footer__copyrights">
        <small>&copy; Kris Tantinirundr. All rights reserved {year}</small>
      </div>
    </footer>
  )
}

export default Footer