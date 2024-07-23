/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import logo from '/public/assets/logo.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo.src} alt="Logo" className="navbar-logo" />

      <div className="navbar-items">
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/about" passHref>
          About Us
        </Link>
        <Link href="/features" passHref>
          Features
        </Link>
        <Link href="/services" passHref>
          Services
        </Link>
        <Link href="/gallery" passHref>
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
