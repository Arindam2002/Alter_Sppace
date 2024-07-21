/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TestimonialCard = ({ img, name, address, testimonial }) => {
  return (
    <div className="flex flex-col p-6 gap-2.5 rounded-tl-[50px] rounded-br-[50px] border-2 border-gray-200 bg-white w-[340px]">
      <div className="flex items-center gap-5">
        <img src={img} alt="user" className="h-[70px] w-[70px] rounded-full" />
        <div className="flex flex-col w-[183px]">
          <h2 className="text-[#292F36] font-dm-serif text-[20px] font-normal leading-[125%] tracking-[0.4px]">
            {name}
          </h2>
          <p className="text-[#4D5053] text-center font-jost text-[16px] font-normal leading-[125%] tracking-[0.32px]">
            {address}
          </p>
        </div>
      </div>
      <p className="text-[#4D5053] font-jost text-[20px] font-normal leading-[150%] tracking-[0.2px]">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;
