import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineBabyChangingStation, MdOutlinePlumbing } from "react-icons/md";
import { CgGirl } from "react-icons/cg";

export const Section4 = () => {
  return (
    <div>
      <div className='md:mx-14 text-4xl text-gray-500'>The recent freelance work</div>
      <div className="md:mx-14 flex justify-between items-center mt-4 text-6xl">
        <div>Recently Posted <span className="text-blue-600">Work</span></div>
        <div className="md:flex text-blue-600 space-x-6 md:block hidden ">
          <FaArrowAltCircleLeft />
          <FaArrowAltCircleRight />
        </div>
      </div>
      <div className="container  px-4 py-8 mb:mx-8">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <div className="flex justify-center items-center ">
              {/* Icon */}
              <div className="text-6xl text-blackmb-2">
                <MdOutlineBabyChangingStation /><br />
              </div>
            </div>
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-center">Card Heading 1</h2>
            {/* Description */}
            <p className="text-gray-600 text-center mb-4">
              This is a short description for card 1. It provides a brief overview of the content or service offered.
            </p>
            {/* Price */}
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">$99.99</div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <div className="flex justify-center items-center">
              <div className="text-6xl text-black ">
                <CgGirl /><br />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center">Card Heading 2</h2>
            <p className="text-gray-600 text-center mb-4">
              This is a short description for card 2. It provides a brief overview of the content or service offered.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">$99.99</div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <div className="flex justify-center items-center ">
              <div className="text-6xl text-black mb-1">
                <MdOutlinePlumbing /><br />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center">Card Heading 3</h2>
            <p className="text-gray-600 text-center mb-4">
              This is a short description for card 3. It provides a brief overview of the content or service offered.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">$99.99</div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
