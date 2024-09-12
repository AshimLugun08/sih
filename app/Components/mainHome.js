import React from 'react';

export const MainHome = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start justify-center p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Are you looking for Freelancers?
        </h1>
        <p className="text-xl md:text-3xl text-gray-500 ">
          Door-to-Door Freelancer Service: Bring offline
        </p>
        <p className="text-xl md:text-3xl text-gray-500 ">
          to your door step with Convenience and
        </p>
        <p className="text-xl md:text-3xl text-gray-500">
          Reliability
        </p>
        <button className="bg-blue-500 text-xl md:text-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-4 md:px-6 rounded mt-6">
          Hire a freelancer
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-4">
        <img
          src="/organic-flat-customer-support.png"
          alt="Centered Image"
          className="w-full h-auto max-w-md md:max-w-full object-contain"
        />
      </div>
    </div>
  );
};
