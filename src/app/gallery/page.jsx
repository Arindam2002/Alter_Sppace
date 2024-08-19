/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './gallery.scss';

import services1 from '/public/assets/services1.png';
import services2 from '/public/assets/services2.png';

import railings from '/public/assets/railings.jpg';
import railings1 from '/public/assets/railings1.jpg';
import railings2 from '/public/assets/railings2.jpg';

import glasspartition from '/public/assets/glasspartition.jpeg';
import glasspartition1 from '/public/assets/glasspartition1.jpeg';
import glasspartition2 from '/public/assets/glasspartition2.jpeg';

import showserenclosure from '/public/assets/showserenclosure.jpg';
import showserenclosure1 from '/public/assets/showserenclosure1.jpg';
import showserenclosure2 from '/public/assets/showserenclosure2.jpg';

import windows from '/public/assets/windows.jpg';
import windows1 from '/public/assets/windows1.jpg';
import windows2 from '/public/assets/windows2.jpeg';

import slidingglass from '/public/assets/slidingglass.jpeg';

const Gallery = () => {
  return (
    <div className="gallery">
      <Navbar />

      <h2>Gallery</h2>
      <div className="main-gallery">
        <div className="gallery-box">
          <div className="gallery-box-img">
            <img src={railings.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={railings1.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={railings2.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={glasspartition.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={glasspartition1.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={glasspartition2.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={showserenclosure.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={showserenclosure1.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={showserenclosure2.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={windows.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={windows1.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={windows2.src} alt="" />
          </div>
          <div className="gallery-box-img">
            <img src={slidingglass.src} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
