import React, { useState } from 'react';

type PhotoSwiperProps = {
  photos: string[]; 
};

const PhotoSwiper: React.FC<PhotoSwiperProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPrevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={goToPrevPhoto} style={{ marginRight: '10px' }}>
          Previous
        </button>
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }}
        />
        <button onClick={goToNextPhoto} style={{ marginLeft: '10px' }}>
          Next
        </button>
      </div>
      <p>
        Photo {currentIndex + 1} of {photos.length}
      </p>
    </div>
  );
};

export default PhotoSwiper;