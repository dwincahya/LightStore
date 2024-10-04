import React, { useState, useEffect } from 'react';
import img1 from '../assets/img/miya.jpg';
import img2 from '../assets/img/furina.jpeg';
import img3 from '../assets/img/firefly1.jpeg';
import img4 from '../assets/img/jinshi.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden md:h-96">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item
          >
            <img
              src={src}
              className="object-cover w-full h-full"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
