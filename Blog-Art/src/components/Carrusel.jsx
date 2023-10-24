import React, { useState, useEffect } from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
}

export default Carousel;

