/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './TestimonialCard.scss';

const TestimonialCard = ({ img, name, address, testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-header">
        {/* <img src={img.src} alt="user" className="testimonial-card-img" /> */}
        <img
          src={`/assets/${img}`}
          alt="user"
          className="testimonial-card-img"
        />
        <div className="testimonial-card-info">
          <h2 className="testimonial-card-name">{name}</h2>
          <p className="testimonial-card-address">{address}</p>
        </div>
      </div>
      <p className="testimonial-card-text">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
