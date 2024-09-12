import React from 'react';

export const ResponsiveGallery = () => {
  const images = [
    // Array of image URLs or icons
    '/img1.jpeg',
    '/img4.jpeg',
    '/img3.jpeg',
    '/img2.jpeg',
    '/img5.jpeg',
    '/img6.jpeg',
    '/img7.jpeg',
    '/img8.jpeg',
  ];

  return (
    <div className="container mx-auto px-2 py-4 max-w-4xl">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((src, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img 
              src={src} 
              alt={`Image ${index + 1}`} 
              className="w-full h-48 object-cover" // Adjust height as needed
            />
          </div>
        ))}
      </div>
    </div>
  );
};
