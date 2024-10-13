import React from 'react';
import img from '../assets/img/banner.jpg';

const Banner = () => {
  return (
    <div className="rounded-xl mx-auto flex justify-center items-center shadow-lg">
      <img
        src={img}
        alt="Banner"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  );
};

export default Banner;
