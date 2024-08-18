'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaUser, FaEnvelope, FaPhone, FaPen } from 'react-icons/fa';
import './GetInTouch.scss';
import getintouch from '/public/assets/getintouch.jpg';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@altersppace.com?subject=Contact from ${formData.firstName} ${formData.lastName}&body=First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AContact Number: ${formData.contactNumber}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="get-in-touch">
      <div className="get-in-touch-container">
        <div className="image-section">
          <Image
            src={getintouch}
            alt="Get in Touch"
            layout="fill"
            objectFit="cover"
            className="get-in-touch-img"
          />
          <div className="overlay">
            <h2>{"Let's Connect"}</h2>
            <p>
              {"We're here to help and answer any question you might have."}
            </p>
          </div>
        </div>
        <div className="form-section">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group half-width">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group half-width">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group half-width">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  required
                />
              </div>
              <div className="form-group half-width">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <FaPen className="input-icon textarea-icon" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
