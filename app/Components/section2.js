import React from 'react';
import { IoIosLock } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export const Section2 = () => {
  return ( 
    <div className="h-auto md:h-auto min-h-80 mx-10 pt-16 md:mx-20 rounded-xl shadow-2xl flex flex-col md:flex-row bg-white max-w-md md:max-w-full">
      {/* Part 1 */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-4">
        <div className='text-6xl md:text-9xl text-iconcolor'><IoIosLock /></div>
        <p className='font-bold text-lg md:text-xl mt-2'>Create Account</p>
        <p className='font-semibold text-sm md:text-xl text-gray-600'>First create your</p>
        <p className='font-semibold text-sm md:text-xl text-gray-600'>account here</p>
      </div>
      
      {/* Part 2 */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-4">
        <div className="text-6xl md:text-9xl text-iconcolor"><TbReportSearch/></div>
        <p className='font-bold text-lg md:text-xl mt-2'>Search Work</p>
        <p className='font-semibold text-sm md:text-xl text-gray-600'>Search the best</p>
        <p className='font-semibold text-sm md:text-xl text-gray-600'>freelance work here</p>
      </div>
      
      {/* Part 3 */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-4">
        <div className="text-6xl md:text-9xl text-iconcolor"><AiOutlineSafetyCertificate/></div>
        <p className='font-bold text-lg md:text-xl mt-2'>Save and Apply</p>
        <p className='font-semibold text-sm md:text-xl text-gray-600'>Apply or save and</p>
        <p className='font-semibold text-sm md:text-xl text-gray-600'>start your work</p>
      </div>
    </div>
  );
}

export default Section2;
