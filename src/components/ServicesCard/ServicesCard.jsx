/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const ServicesCard = ({ img, title, where }) => {
  return (
    <div className="flex w-[600px] gap-[24px] md:w-[450px] md:gap-[18px] sm:w-[300px] sm:gap-[12px]">
      <img src={img} alt={title} className="w-16 h-16 object-cover rounded" />
      <div className="flex w-full h-[70px] justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <Link href={where}>
          <a className="w-[70px] h-[70px] flex justify-center items-center">
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
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
