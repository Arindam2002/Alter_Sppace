/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import glass1 from '/public/assets/glass1.png';
import glass2 from '/public/assets/glass2.png';
import glass3 from '/public/assets/glass3.png';

import './sliding-glass.scss';

import React from 'react';

const SlidingGlassPartition = () => {
  return (
    <div className="sliding-glass">
      <Navbar />

      <h1>Sliding Glass Partitions</h1>

      <section className="sliding-glass-sections">
        <div className="sliding-glass-content">
          <div className="sliding-glass-main">
            <h2>Telescopic Glass Partitions: </h2>
            <p>
              Telescopic glass partitions are perfect for large openings where a
              sleek, modern design is desired. These partitions slide
              effortlessly to open up spaces or create private areas as needed,
              offering both style and practicality.
            </p>
          </div>
          <img src={glass1.src} alt="Telescopic Glass Partitions" />
        </div>
      </section>

      <section className="sliding-glass-sections">
        <div className="sliding-glass-content">
          <div className="sliding-glass-main">
            <h2>Synchronized Glass Partitions: </h2>
            <p>
              Our synchronized glass partitions move in harmony to provide a
              smooth and elegant solution for dividing spaces. They are ideal
              for settings that require a balance of openness and privacy, such
              as conference rooms or living areas.
            </p>
          </div>
          <img src={glass2.src} alt="Synchronized Glass Partitions" />
        </div>
      </section>

      <section className="sliding-glass-sections">
        <div className="sliding-glass-content">
          <div className="sliding-glass-main">
            <h2>Sliding-Folding Glass Partitions: </h2>
            <p>
              Sliding-folding glass partitions combine the benefits of sliding
              and folding mechanisms to offer maximum flexibility. These
              partitions are perfect for creating large, open spaces that can be
              easily sectioned off when needed.
            </p>
          </div>
          <img src={glass3.src} alt="Sliding-Folding Glass Partitions" />
        </div>
      </section>

      <div className="sliding-video">
        <div className="sliding-video-content">
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

export default SlidingGlassPartition;
