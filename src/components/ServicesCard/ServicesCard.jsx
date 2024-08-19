/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import './ServicesCard.scss';

const ServicesCard = ({ index, img, title, where }) => {
  return (
    <div className="services-card">
      <div
        className={`services-img-container ${index % 2 === 0 ? 'even' : 'odd'}`}
      >
        <Link href={where}>
          <img
            src={`/assets/${img}`}
            alt={title}
            className="services-card-img"
          />
        </Link>
      </div>

      <div className="content">
        <h3 className="title">{title}</h3>
        <Link href={where} className="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path
              d="M32 44L40 35L32 26"
              stroke="#292F36"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
