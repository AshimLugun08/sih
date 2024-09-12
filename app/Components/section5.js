import React from 'react';
import { ResponsiveGallery } from './categories'; // Adjust the import path as necessary

export const Section5 = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Heading Section */}
      <div className='flex justify-center'>
        <h1 className='text-5xl font-semibold text-center'>
          Choose Different <span className='text-blue-600'>Category</span>
        </h1>
      </div>

      {/* Responsive Gallery Section */}
      <div className='mt-8'>
        <ResponsiveGallery />
      </div>
      <div className='flex justify-center mt-8'>
        <button className='bg-blue-600 text-xl text-white py-4 font-semibold px-4 rounded-xl hover:bg-blue-700'>
          More Categories
        </button>
      </div>
    </div>
  );
};
