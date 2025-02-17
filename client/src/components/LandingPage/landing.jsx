import React from 'react';
import { Link } from 'react-router-dom';
import ScrollImage from '/images/Scroll.png';
import Book from '/images/book.png';
import Bag from '/images/bag.png';
import CoinPurse from '/images/coin_purse.png';
import Map from '/images/map.png';
import UprightStaff from '/images/staff_upright.png';
import UpsideDownStaff from '/images/staff_upsidedown.png';
import VerticalScroll from '/images/vertical-scroll.png';
import Quill from '/images/quill-for-mobile-landing.png';
import 'animate.css'
import './landing.css';

function Landing() {
  return (
    <div className='landing-page'>
      {/* Scroll background, animated site title, slogan, 'Start your Adventure' button, and, depending on viewport width, staff image. */}
      <div className='hero'>
        <img src={UpsideDownStaff} alt='Upsidedownstaff' className='staff-image upside-down' />
        <img src={ScrollImage} alt='Scroll' className='scroll-image' />
        <img src={VerticalScroll} alt='VerticalScroll' className='vertical-scroll' />
        <img src={Quill} alt='Quill' className='quill-for-mobile' />
        <img src={UprightStaff} alt='StaffUpright' className='staff-image upright' />
        <div className='container'>
          <h1 className='landing-title animate__animated animate__zoomIn'>MythWeaver</h1>
          <p className='slogan'>Craft Your Tale, Weave Your Myth</p>
          <p className='slogan-mobile-1'>Craft your tale . . . </p>
          <p className='slogan-mobile-2'>weave your myth.</p>
          <Link to='/myth-index' className='cta-button'>Start your Adventure</Link>
        </div>
      </div>

      {/* Additional images which appear for larger viewport widths */}
      <div className='images-section'>
        <div className='container'>
          <img src={Book} alt='Book' className='book-image' />
          <img src={Bag} alt='Bag' className='bag-image' />
          <img src={CoinPurse} alt='CoinPurse' className='coinpurse-image' />
          <img src={Map} alt='Map' className='map-image' />
        </div>
      </div>
    </div>
  );
}
export default Landing;
