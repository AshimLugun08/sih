"use client"; // This makes the component a Client Component

import React from 'react';
import Link from 'next/link';
import Login from './login';

export const Navbar = () => {
  const handleModalOpen = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      // Assuming 'showModal' is a valid method
      modal.showModal();
    }
  };

  return (
    <div>
      <nav className="p-4 bg-white rounded-full shadow-md top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-gray-600 text-lg font-bold">
            <Link href="/">
              <p>MyLogo</p>
            </Link>
          </div>
          {/* Menu Items */}
          <div className="flex space-x-6">
            <Link href="/">
              <p className="text-gray-600 hover:text-blue-500">Home</p>
            </Link>
            <Link href="/findwork">
              <p className="text-gray-600 hover:text-blue-500">Find Work</p>
            </Link>
            <Link href="/findfreelancer">
              <p className="text-gray-600 hover:text-blue-500">Find Freelancer</p>
            </Link>
            <div>
              <p
                className="text-gray-600 hover:text-blue-500"
                onClick={handleModalOpen}
              >
              
              </p>
              <Login />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
