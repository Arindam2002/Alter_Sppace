/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState, useRef } from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import './TestimonialCard.scss';

const TestimonialCard = ({ img, name, address, testimonial, active }) => {
  return (
    <div className={`testimonial-card ${active ? 'active' : ''}`}>
      <div className="testimonial-card-content">
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
        <div className="testimonial-card-text-wrapper">
          <p className="testimonial-card-text">
            {testimonial.length > 300
              ? `${testimonial.substring(0, 297)}...`
              : testimonial}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
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
      nextTestimonial();
    }, 4000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 1 ? extendedTestimonials.length - 2 : prevIndex - 1
    );
    setIsTransitioning(true);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === extendedTestimonials.length - 2 ? 1 : prevIndex + 1
    );
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(extendedTestimonials.length - 2);
    } else if (currentIndex === extendedTestimonials.length - 1) {
      setCurrentIndex(1);
    }
  };

  return (
    <div className="testimonial">
      <h2 className="testimonial-heading">What the People Think About Us</h2>
      <div className="testimonial-cards">
        <div
          className={`testimonial-cards-container ${
            isTransitioning ? '' : 'no-transition'
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease' : 'none',
            width: `${extendedTestimonials.length * 100}%`,
          }}
          onTransitionEnd={handleTransitionEnd}
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
        <button onClick={prevTestimonial} aria-label="Previous testimonial">
          <GrLinkPrevious />
        </button>
        <button onClick={nextTestimonial} aria-label="Next testimonial">
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
