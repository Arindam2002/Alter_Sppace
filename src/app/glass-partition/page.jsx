/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import glass1 from '/public/assets/glass1.png';
import glass2 from '/public/assets/glass2.png';

import './glass.scss';

import React from 'react';

const GlassPartition = () => {
  return (
    <div className="glass">
      <Navbar />

      <h1>Glass Partitions</h1>

      <section className="glass-sections">
        <div className="glass-sections-content">
          <div className="glass-sections-main">
            <h2>Fixed Glass Partitions</h2>
            <p>
              Our fixed glass partitions are designed to create a seamless and
              elegant division of space, providing both functionality and
              aesthetic appeal. These partitions are perfect for offices, homes,
              and commercial spaces where a permanent solution is needed.
            </p>

            <ul>
              <li>10/12mm Tempered Glass</li>
              <li>Clear/Frosted/Designer</li>
              <li>Hardware: SS 304 Fittings</li>
              <li>Aluminium Twin Profiles</li>
            </ul>
          </div>
          <img src={glass1.src} alt="" />
        </div>
      </section>

      <section className="glass-sections">
        <div className="glass-sections-content">
          <div className="glass-sections-main">
            <h2>Modular Glass Partitions</h2>
            <p>
              Modular glass partitions offer flexibility and adaptability. They
              are ideal for spaces that require frequent layout changes,
              allowing you to reconfigure your environment easily while
              maintaining a sophisticated look.
            </p>
            <ul>
              <li>Types: Fixed Glaze (25mm x 25mm)</li>
              <li>Single Glaze (25mm x 45mm)</li>
              <li>Double Glaze (25mm x 100mm)</li>
              <li>Style Door (42mm x 75mm)</li>
            </ul>
          </div>
          <img src={glass2.src} alt="" />
        </div>
      </section>

      <div className="video">
        <div className="video-content">
          <iframe
            src="https://www.youtube.com/embed/RYldQ-HKZdg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Glass Partitions Video"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GlassPartition;
