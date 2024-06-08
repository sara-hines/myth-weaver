import React from 'react';
import { Link } from 'react-router-dom';
import ScrollImage from '/images/Scroll.png'; 
import Book from '/images/book.png'; 
import Bag from '/images/bag.png';
import CoinPurse from '/images/coin_purse.png';
import Map from '/images/map.png'; 
import UprightStaff from '/images/staff_upright.png'; 
import UpsideDownStaff from '/images/staff_upsidedown.png'; 

import 'animate.css'
import './landing.css';

function Landing() {
  return (
    <div className="landing-page">
      <div className="hero">
        <img src={UpsideDownStaff} alt="Upsidedownstaff" className="staff-image upside-down" />
        <img src={ScrollImage} alt="Scroll" className="scroll-image" />
        <img src={UprightStaff} alt="StaffUpright" className="staff-image upright" />
        <div className="container">
          <h1 className="landing-title animate__animated animate__zoomIn">MythWeaver</h1>
          <p className="slogan">Craft Your Tale, Weave Your Myth</p>
          <Link to="/myth-index" className="cta-button">Start your Adventure</Link>
        </div>
      </div>
      <section className="images-section">
        <div className="container">
          <img src={Book} alt="Book" className="book-image" />
          <img src={Bag} alt="Bag" className="bag-image" />
          <img src={CoinPurse} alt="CoinPurse" className="coinpurse-image" />
          <img src={Map} alt="Map" className="map-image" />
        </div>
      </section>
    </div>
  );
}
export default Landing;
