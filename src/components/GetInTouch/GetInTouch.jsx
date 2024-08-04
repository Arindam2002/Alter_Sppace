'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaUser, FaEnvelope, FaPhone, FaPen } from 'react-icons/fa';
import './GetInTouch.scss';
import getintouch from '/public/assets/getintouch.png';

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
    const mailtoLink = `mailto:info@altersppace.com;altersppace@gmail.com?subject=Contact from ${formData.firstName} ${formData.lastName}&body=First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AContact Number: ${formData.contactNumber}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="get-in-touch">
      <div className="get-in-touch-container">
        <div className="image-section">
          <Image
            src={getintouch}
            alt="get in touch"
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
            <div className="form-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <FaPhone className="input-icon" />
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <FaPen className="input-icon textarea-icon" />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
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
