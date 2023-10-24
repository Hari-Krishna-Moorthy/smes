import Image from 'next/image';
import React, { useState } from 'react';

const ImageCarousel = ({ images, captions }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="w-full relative overflow-x-hidden" >
        <div className="flex transition-transform duration-300 ease-in-out transform translate-x-full" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <Image src={image} alt={`Image ${index + 1}`} className="w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white">
                <h1 style={{ padding: "0px 35%" }} className="text-3xl font-bold text-center">{captions[index]}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white text-2xl hover:text-gray-300 focus:outline-none"
        onClick={handlePrev}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white text-2xl hover:text-gray-300 focus:outline-none"
        onClick={handleNext}
      >
        &#9654;
      </button>
    </div>

  );
};

export default ImageCarousel;
