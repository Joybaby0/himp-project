// components/Navbar.js
"use client"
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#171821] text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* First div: Logo and text */}
        <div className="flex items-center space-x-4">
          <img
            src="/navimg.png" 
            alt="Logo"
            className="w-18 h-12"
          />
          <span className="text-white text-sm font-xl text-base">Housing Market Information Portal</span>
        </div>

        {/* Second div: Menu items */}
        <div className="hidden md:flex space-x-6 text-white">
          <div className="relative">
            <button className="flex items-center space-x-1">
              <span className="text-sm">Property Information</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center space-x-1">
              <span className="text-sm">Housing Data</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <a href="#" className="text-sm hover:text-gray-300">Housing Directory</a>
          <div className="relative">
            <button className="flex items-center space-x-1">
              <span className="text-sm">Survey</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <a href="#" className="text-sm hover:text-gray-300">News</a>
          <a href="#" className="text-sm hover:text-gray-300">Contact Us</a>
        </div>

        {/* Third div: Buy and Sell buttons */}
        <div className="hidden md:flex space-x-2">
          <button className="bg-[#B78100] text-white px-6 py-1 rounded-md">
            Buy
          </button>
          <button className="bg-[#08662F] text-white px-6 py-1 rounded-md hover:bg-green-800">
            Sell
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-cyan-950 text-white p-4`}
      >
        <div className="space-y-4">
          <div className="relative">
            <button className="flex items-center space-x-1">
              <span className="text-sm">Property Information</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center space-x-1">
              <span className="text-sm">Housing Data</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <a href="#" className="block">Housing Directory</a>
          <div className="relative">
            <button className="flex items-center space-x-1">
              <span className="text-sm">Survey</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <a href="#" className="block">News</a>
          <a href="#" className="block">Contact Us</a>

          <div className="mt-4 space-x-4">
            <button className="w-full bg-yellow-700 text-white px-6 py-2 rounded-md hover:bg-yellow-800">
              Buy
            </button>
            <button className="w-full bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-900">
              Sell
            </button>
          </div>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
