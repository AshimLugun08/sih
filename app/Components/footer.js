import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'; // Importing contact icons

const NewsletterAndFooter = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Newsletter Subscription Section */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Newsletter Subscription</h2>
        <p className="text-gray-600 mt-2">Subscribe to our newsletter to get new freelance work and projects</p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Subscribe</button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1: Branding and Social Media */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600">Ucaminoh</h3>
            <p className="text-gray-600 mt-2">
              Powerful Freelance Marketplace System with ability to change the Users (Freelancers & Clients)
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <FaInstagram className="text-gray-600 hover:text-gray-900 cursor-pointer" />
              <FaTwitter className="text-gray-600 hover:text-gray-900 cursor-pointer" />
              <FaFacebook className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>

          {/* Column 2: For Clients */}
          <div>
            <h3 className="text-xl font-semibold">For Clients</h3>
            <ul className="text-gray-600 mt-2">
              <li className="hover:underline cursor-pointer">Find Freelancers</li>
              <li className="hover:underline cursor-pointer">Refund Policy</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3: For Freelancers */}
          <div>
            <h3 className="text-xl font-semibold">For Freelancers</h3>
            <ul className="text-gray-600 mt-2">
              <li className="hover:underline cursor-pointer">Find Work</li>
              <li className="hover:underline cursor-pointer">Create Account</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-xl font-semibold">Call Us</h3>
            <ul className="text-gray-600 mt-2 space-y-2">
              <li className="flex items-center">
                <MdLocationOn className="mr-2" /> India
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2" /> +919931154112
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2" /> Ucaminoh@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500">
          2023 Ucaminoh. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default NewsletterAndFooter;
