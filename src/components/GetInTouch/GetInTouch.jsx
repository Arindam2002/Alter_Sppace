/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
    const mailtoLink = `mailto:support@example.com?subject=Contact from ${formData.firstName} ${formData.lastName}&body=First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AContact Number: ${formData.contactNumber}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="get-in-touch">
      <div className="get-in-touch-ccc">
        <Image
          src={getintouch}
          alt="get in touch"
          className="get-in-touch-img"
          data-aos="fade-right"
          data-aos-duration="800"
          width={600} // Adjust if needed based on your design
          height={400} // Adjust if needed based on your design
        />
        <div className="get-in-touch-content">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                className="form-input"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
