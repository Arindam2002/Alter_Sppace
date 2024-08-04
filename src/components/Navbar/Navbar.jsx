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
        <a href="/" onClick={toggleMenu}>
          Home
        </a>
        <a href="/#about" onClick={toggleMenu}>
          About Us
        </a>
        <a href="/#features" onClick={toggleMenu}>
          Features
        </a>
        <a href="/#services" onClick={toggleMenu}>
          Services
        </a>
        <Link href="/gallery" onClick={toggleMenu}>
          Gallery
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
