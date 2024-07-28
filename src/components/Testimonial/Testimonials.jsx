/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState, useRef } from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import './TestimonialCard.scss';

const TestimonialCard = ({ img, name, address, testimonial, active }) => {
  return (
    <div className={`testimonial-card ${active ? 'active' : ''}`}>
      <div className="testimonial-card-header">
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

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const timeoutRef = useRef(null);
  const testimonialCount = testimonials.length;
  const extendedTestimonials = [
    testimonials[testimonialCount - 1],
    ...testimonials,
    testimonials[0],
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === extendedTestimonials.length - 1) {
          setTimeout(() => {
            setCurrentIndex(1);
          }, 500);
          return 1;
        }
        return (prevIndex + 1) % extendedTestimonials.length;
      });
    }, 2500);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, extendedTestimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 1 ? extendedTestimonials.length - 2 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === extendedTestimonials.length - 1 ? 1 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial">
      <h2 className="testimonial-heading">What the People Think About Us</h2>
      <div className="testimonial-cards">
        <div
          className="testimonial-cards-container"
          style={{
            transform: `translateX(-${currentIndex * 340}px)`,
            transition: 'transform 0.5s ease',
            width: `${extendedTestimonials.length * 340}px`,
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              img={testimonial.img}
              name={testimonial.name}
              address={testimonial.address}
              testimonial={testimonial.testimonial}
              active={index === currentIndex}
            />
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={prevTestimonial}>
          <GrLinkPrevious />
        </button>
        <button onClick={nextTestimonial}>
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
