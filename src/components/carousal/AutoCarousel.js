import React, { useState, useEffect } from 'react';
import img0 from '../../images/carousalImages/0.jpeg';
import img1 from '../../images/carousalImages/1.jpeg';
import img2 from '../../images/carousalImages/2.jpeg';
import img3 from '../../images/carousalImages/3.jpeg';
import img4 from '../../images/carousalImages/4.jpeg';
import img5 from '../../images/carousalImages/5.jpeg';

const AutoCarousel = () => {
  const [images] = useState([img1, img2, img3, img4, img5]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="carousel-container flex flex-col items-center justify-center space-y-4 my-8">
      <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
        Our Team
      </h1>
      <div className='w-full flex justify-around flex-wrap'>
      <div className="flex items-center space-x-4">
  <div className="w-32 h-32 overflow-hidden rounded-full">
    <img
      src={img0}
      alt="Avatar"
      className="w-full h-full object-cover"
    />
  </div>

 
  <div>

    <h2 className="text-xl font-bold">Ayush Mer</h2>

    <p className="text-gray-600">Founder and CEO</p>
  </div>
</div>

      <div className="carousel-wrapper relative w-80 h-64 overflow-hidden rounded-md">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`carousel-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default AutoCarousel;
