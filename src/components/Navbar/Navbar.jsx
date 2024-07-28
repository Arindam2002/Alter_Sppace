/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/public/assets/logo.png';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <img src={logo.src} alt="Logo" className="navbar-logo" />

      <div className={`navbar-items ${isOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/features">Features</Link>
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
