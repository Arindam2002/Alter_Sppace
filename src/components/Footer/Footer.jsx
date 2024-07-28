import React from 'react';

import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaYoutube,
} from 'react-icons/lia';

import './Footer.scss';

const Footer = () => {
  const services = [
    { title: 'Glass Partition', where: '/glasspartition' },
    { title: 'Sliding Glass Partitions', where: '/slidingglasspartitions' },
    { title: 'Windows', where: '/windows' },
    { title: 'Railings', where: '/railings' },
    { title: 'Shower Enclosures', where: '/showerenclosures' },
    { title: 'Home Extensions', where: '/nextpage' },
  ];

  const pages = [
    { title: 'Home', where: '/' },
    { title: 'About Us', where: '/about' },
    { title: 'Contact', where: '/contact' },
    { title: 'Blog', where: '/blog' },
  ];

  return (
    <div className="footer">
      <div className="main-div">
        <div className="footer-main-section">
          <h4>Alter Sppace</h4>
          <p>Transforming Spaces with Elegance and Precision</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/AlterSppaceSolutions?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaFacebook className="social-icons-logo" color="#F8952D" />
            </a>
            <a
              href="https://www.instagram.com/altersppacesolutions?igsh=MTlnYnBjNDZrbGY5aQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaInstagram className="social-icons-logo" color="#F8952D" />
            </a>
            <a
              href="https://www.linkedin.com/in/altersppacesolutions?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaLinkedin className="social-icons-logo" color="#F8952D" />
            </a>
            <a
              href="https://youtube.com/@altersppace4159?si=_LzuHzp352-2lYYI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaYoutube className="social-icons-logo" color="#F8952D" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h5>Services</h5>
          {services.map((service, index) => (
            <p key={index}>
              <a href={service.where}>{service.title}</a>
            </p>
          ))}
        </div>

        <div className="footer-section">
          <h5>Pages</h5>
          {pages.map((page, index) => (
            <p key={index}>
              <a href={page.where}>{page.title}</a>
            </p>
          ))}
        </div>

        <div className="footer-section">
          <h5>Contact</h5>
          <p>
            <a href="mailto:info@altersppace.com">info@altersppace.com</a>
          </p>
          <p>
            <a href="mailto:altersppace@gmail.com">altersppace@gmail.com</a>
          </p>
          <p>
            <a href="tel:+918767078588">+91 8767078588</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
