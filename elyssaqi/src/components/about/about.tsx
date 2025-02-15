import React from 'react';
import PhotoSwiper from './widgets/photoswiper'; // Import the PhotoSwiper component

const About: React.FC = () => {
  // Define an array of photo URLs
  const photos = [
    'https://via.placeholder.com/400x300.png?text=Photo+1',
    'https://via.placeholder.com/400x300.png?text=Photo+2',
    'https://via.placeholder.com/400x300.png?text=Photo+3',
    'https://via.placeholder.com/400x300.png?text=Photo+4',
  ];

  return (
    <div className="about">
      <div className="widgets">
        <PhotoSwiper photos={photos} />
      </div>
    </div>
  );
};

export default About;