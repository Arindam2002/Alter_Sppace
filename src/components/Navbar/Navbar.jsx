/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/public/assets/logo.png';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      const navbar = navbarRef.current;

      if (heroSection && navbar) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        if (window.scrollY > heroBottom) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`} ref={navbarRef}>
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
