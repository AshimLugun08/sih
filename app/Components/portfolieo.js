import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing an arrow icon from react-icons

export const CardSection = () => {
  // Sample data for the cards
  const cards = [
    {
      imgSrc: '22.jpeg',
      name: 'Alice Johnson',
      occupation: 'Beautician',
    },
    {
      imgSrc: '23.jpeg',
      name: 'Milli Brown',
      occupation: 'Yoga Teacher',
    },
    {
      imgSrc: 'img21.jpeg',
      name: 'Sara Lee',
      occupation: 'Maid',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Card Container */}
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {cards.map((card, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden'>
            {/* Card Image */}
            <div className='w-full h-48 flex items-center justify-center'>
              <img 
                src={card.imgSrc} 
                alt={card.name} 
                className='w-full h-full object-contain' 
              />
            </div>

            {/* Card Content */}
            <div className='p-4'>
              {/* Name */}
              <h2 className='text-2xl font-semibold'>{card.name}</h2>
              {/* Occupation */}
              <p className='text-gray-600'>{card.occupation}</p>
              {/* Arrow Icon */}
              <div className='flex justify-end mt-4'>
                <FaArrowRight className='text-blue-600 text-lg' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
