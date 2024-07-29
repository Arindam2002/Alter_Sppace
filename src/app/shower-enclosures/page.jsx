/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import glass1 from '/public/assets/glass1.png';

import './showerenclosures.scss';

import React from 'react';

const ShowerEnclosures = () => {
  return (
    <div className="shower">
      <Navbar />

      <h1>Shower Enclosures</h1>

      <section className="shower-sections">
        <div className="shower-sections-content">
          <div className="shower-sections-main">
            <h2>Shower Enclosures</h2>
            <p>
              Our shower enclosures are designed to provide a luxurious and
              functional showering experience. With a range of styles and
              finishes, they can be customized to fit any bathroom design,
              offering both elegance and practicality.
            </p>
          </div>
          <img src={glass1.src} alt="Shower Enclosures" />
        </div>
      </section>

      <div className="shower-video">
        <div className="shower-video-content">
          <iframe
            src="https://www.youtube.com/embed/RYldQ-HKZdg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Shower Enclosures Video"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShowerEnclosures;
