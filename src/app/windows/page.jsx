/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import glass1 from '/public/assets/glass1.png';
import glass2 from '/public/assets/glass2.png';

import './windows.scss';

import React from 'react';

const Windows = () => {
  return (
    <div className="windows">
      <Navbar />

      <h1>Windows</h1>

      <section className="windows-sections">
        <div className="windows-sections-content">
          <div className="windows-sections-main">
            <h2>Slimline Aluminium Windows: </h2>
            <p>
              Our slimline aluminium windows combine sleek design with maximum
              light penetration. Durable and energy-efficient, they suit both
              residential and commercial settings. Available in single, double
              glazed, and laminated glass units without thermal breaks, these
              windows are ideal where thermal insulation is less critical. They
              feature a special brush seal for excellent sound insulation and
              dust proofing. Choose from interlock options of 15mm, 17mm, and
              20mm thicknesses, plus a 45mm Casement Series for doors.
            </p>
            <ul>
              <li>10+ years surface finish guarantee</li>
              <li>Anodized, PVDF-wood effect, and anti-bacterial coatings</li>
              <li>Non-insulated system</li>
              <li>2, 3, or 4 track options</li>
              <li>Glass thickness: 6mm to 24mm</li>
              <li>Various locking and Tilt & Turn options</li>
              <li>Suitable for low to moderate burglary risk areas</li>
            </ul>
          </div>
          <img src={glass1.src} alt="Slimline Aluminium Windows" />
        </div>
      </section>

      <section className="windows-sections">
        <div className="windows-sections-content">
          <div className="windows-sections-main">
            <h2>UPVC Windows: </h2>
            <p>
              UPVC (Unplasticized Polyvinyl Chloride) is a rigid and durable
              material, making it an ideal choice for windows and doors. Known
              for its strength, longevity, and low maintenance requirements,
              UPVC is a popular choice for modern homes. These windows provide
              excellent thermal insulation and soundproofing, and come in a
              variety of styles to suit any architectural design.
            </p>
          </div>
          <img src={glass2.src} alt="UPVC Windows" />
        </div>
      </section>

      <div className="windows-video">
        <div className="windows-video-content">
          <iframe
            src="https://www.youtube.com/embed/RYldQ-HKZdg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Windows Video"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Windows;
