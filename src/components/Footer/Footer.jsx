import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaYoutube,
  LiaWhatsapp,
} from 'react-icons/lia';

import './Footer.scss';

const Footer = () => {
  const services = [
    { title: 'Glass Partition', where: '/glass-partition' },
    { title: 'Sliding Glass Partitions', where: '/sliding-glass-partitions' },
    { title: 'Windows', where: '/windows' },
    { title: 'Railings', where: '/railings' },
    { title: 'Shower Enclosures', where: '/shower-enclosures' },
  ];

  const pages = [
    { title: 'Home', where: '/' },
    { title: 'About Us', where: '/#about' },
    { title: 'Features', where: '/#features' },
    { title: 'Services', where: '/#services' },
    { title: 'Gallery', where: '/gallery' },
  ];

  return (
    <div className="footer" data-aos="fade-up" data-aos-duration="800">
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
              <LiaFacebook className="social-icons-logo" />
            </a>
            <a
              href="https://www.instagram.com/altersppacesolutions?igsh=MTlnYnBjNDZrbGY5aQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaInstagram className="social-icons-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/altersppacesolutions?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaLinkedin className="social-icons-logo" />
            </a>
            <a
              href="https://youtube.com/@altersppace4159?si=_LzuHzp352-2lYYI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaYoutube className="social-icons-logo" />
            </a>
            <a
              href="https://wa.me/918767078588"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaWhatsapp className="social-icons-logo" />
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
          <p>
            <a href="tel:+918208235129">+91 8208235129</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
