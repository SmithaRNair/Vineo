'use client'; // Marking as client-side component

import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import the WhatsApp icon
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '../atoms/Button'; // Importing the Button from the atoms folder
import Link from 'next/link';

export const Header = () => {
  const router = useRouter(); // Initialize useRouter hook
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle dropdown on mobile

  const handleBeginClick = () => {
    router.push('/question'); // Navigate to the question page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle dropdown menu on mobile
  };

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-custom-gradient p-4 text-white sm:p-6 md:flex md:justify-between md:items-center">
      {/* Vineo Logo */}
      <div className="flex items-center flex-shrink-0">
        <img src="/images/logo.png" alt="Vineo Logo" className="w-28 sm:w-32 md:w-40" />
      </div>

      {/* Button Container */}
      <div className="ml-auto flex space-x-4 sm:space-x-6 bg-transparent justify-center sm:justify-end w-full sm:w-auto">
        {/* Mobile Dropdown */}
      

        <div className="sm:hidden flex items-end relative ml-auto"> {/* Show on mobile only */}
       
          <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
            <IconButton
              className="bg-green-500 hover:bg-green-600 mt-4 sm:mt-0 ml-4"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon style={{ color: 'white', fontSize: '1.5rem' }} />
            </IconButton>
          </a>
          <button
            onClick={toggleMenu}
            className="text-vineopink bg-transparent p-2 rounded-md"
          >
            {/* SVG for Hamburger Menu */}
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                
                <>
                  {/* Close Icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </>
              ) : (
                <>
                  {/* Hamburger Icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </>
              )}
            </svg>
          </button>
          

          {isMenuOpen && (
            <div className="absolute top-12 right-0 text-vineopink p-4 rounded-md shadow-lg ">
              {/* Mobile Dropdown Menu Items */}
              {isMenuOpen && (
              <div className="absolute top-12 right-0 bg-white p-4  shadow-lg min-w-max">
                {/* Mobile Dropdown Menu Items */}
                <ul className="flex flex-col space-y-2 p-4">
                  <li>
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-900">
                      Give Vineo As Gift
                    </Link>
                  </li>
                  <li>
                    <Link href="/question" onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-900">
                      Begin
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-900">
                      Access
                    </Link>
                  </li>
                </ul>
              </div>
)}

            </div>
          )}
        </div>

       

        {/* Desktop Buttons */}
        <div className="hidden ml-auto sm:flex space-x-4 w-full justify-between">
          <Button
            text="Give Vineo as a Gift"
            onClick={() => console.log('Gift clicked')}
            variant="outlined"
            color="default"
            sx={{
              textTransform: 'none',
              padding: '8px 20px',
              height: '40px',
              width: 'auto',
              color: '#F78A79',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor: '#F25D54',
              },
            }}
          />
          <Button
            text="Begin"
            onClick={handleBeginClick}
            variant="contained"
            color="orange"
            sx={{
              padding: '8px 20px',
              height: '40px',
              width: 'auto',
            }}
          />
          <Button
            text="Access"
            onClick={() => console.log('Access clicked')}
            variant="outlined"
            color="secondary"
            sx={{
              backgroundColor: 'transparent',
              borderColor: '#F78A79',
              height: '40px',
              width: 'auto',
            }}
          />
           {/* WhatsApp Icon Button */}
          <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
            <IconButton
              className="bg-green-500 hover:bg-green-600 mt-4 sm:mt-0 ml-4"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon style={{ color: 'white', fontSize: '1.5rem' }} />
            </IconButton>
          </a>
        </div>
      </div>
    </nav>
  );
};
