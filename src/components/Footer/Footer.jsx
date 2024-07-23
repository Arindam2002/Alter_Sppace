import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-div">
        <div className="footer-main-section">
          <h4>Alter Sppace</h4>
          <p>Unique, Efficient and Cost Effective Solutions</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/AlterSppaceSolutions?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icons-logo" color="#F8952D" />
            </a>
            <a
              href="https://www.instagram.com/altersppacesolutions?igsh=MTlnYnBjNDZrbGY5aQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icons-logo" color="#F8952D" />
            </a>
            <a
              href="https://www.linkedin.com/in/altersppacesolutions?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icons-logo" color="#F8952D" />
            </a>
            <a
              href="https://youtube.com/@altersppace4159?si=_LzuHzp352-2lYYI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="social-icons-logo" color="#F8952D" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h5>Services</h5>
          <p>Kitchen</p>
          <p>Living Area</p>
          <p>Bathroom</p>
          <p>Dining Hall</p>
          <p>Bedroom</p>
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
