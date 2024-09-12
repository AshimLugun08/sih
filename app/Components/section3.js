import React from 'react'
import "../globals.css"

export const Section3 = () => {
  return (
    <div className="h-auto flex flex-col md:flex-row">
    {/* Left Half with Image */}
    <div className="relative w-full md:w-1/2 flex  items-center justify-center bg-transparent">
      <img
        src="/abt-left-1.png"
        alt="Descriptive Alt Text"
        className="object-cover w-full h-auto max-w-full max-h-[80vh]"
      />
      {/* Overlay Boxes */}
      <div className="absolute border rounded-lg p-2 z-10  bg-white shadow-md box1">
        <p className="text-center text-sm md:text-lg">500+</p>
        <p className="text-center text-sm md:text-lg">Freelancers</p>
      </div>
      <div className="absolute border rounded-lg p-2 z-10 bg-white shadow-md box2">
        <p className="text-center text-sm md:text-lg">300+</p>
        <p className="text-center text-sm md:text-lg">Work Posted</p>
      </div>
    </div>
    
    {/* Right Half with Content */}
    <div className="w-full md:w-1/2 flex flex-col items-start justify-center bg-white md:p-8">
       
        <h2 className="text-3xl md:text-6xl font-bold text-gray-700 mb-4">
          Find The Best<br></br> <span className='text-blue-600'>Freelancer</span> Here
        </h2>
        <p className="text-base md:text-xl  text-gray-600 mb-6">
          This platform will provide job opportunities for talented individuals in various fields such as mehndi designing, beautician services, babysitting, home decoration, plumbing, and many more. With ucaminoh, we strive to create a space where skilled workers can showcase their expertise and connect with clients who are in need of their services.
        </p>
      </div>
  </div>
  )
}
