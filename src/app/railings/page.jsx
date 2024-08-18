/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import railings1 from '/public/assets/railings1.jpg';
import railings2 from '/public/assets/railings2.jpg';

import './railings.scss';

import React from 'react';

const Railings = () => {
  return (
    <div className="railings">
      <Navbar />

      <h1>Railings</h1>

      <section className="railings-sections">
        <div className="railings-sections-content">
          <div className="railings-sections-main">
            <h2>Aluminium & Glass Railings</h2>
            <p>
              Our aluminium and glass railings offer a contemporary look with
              the strength and durability of aluminium combined with the
              elegance of glass. They are ideal for balconies, staircases, and
              terraces.
            </p>
          </div>
          <img src={railings1.src} alt="Aluminium & Glass Railings" />
        </div>
      </section>

      <section className="railings-sections">
        <div className="railings-sections-content">
          <div className="railings-sections-main">
            <h2>Stainless Steel Railings</h2>
            <p>
              Stainless steel railings provide a sleek, modern appearance while
              being incredibly strong and resistant to corrosion. They are
              perfect for both indoor and outdoor applications.
            </p>
          </div>
          <img src={railings2.src} alt="Stainless Steel Railings" />
        </div>
      </section>

      {/* <div className="railings-video">
        <div className="railings-video-content">
          <iframe
            src="https://www.youtube.com/embed/RYldQ-HKZdg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Railings Video"
          ></iframe>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Railings;
