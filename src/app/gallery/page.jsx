/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './gallery.scss';

import services1 from '/public/assets/services1.png';
import services2 from '/public/assets/services2.png';

const Gallery = () => {
  return (
    <div className="gallery">
      <Navbar />

      <h2>Gallery</h2>
      <div className="main-gallery">
        <div className="gallery-box">
          <div className="gallery-box-img">
            <img src={services1.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={services2.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={services1.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={services2.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={services1.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={services2.src} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
