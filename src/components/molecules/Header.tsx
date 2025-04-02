'use client';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '../atoms/Button';

// Button style configurations
const buttonStyles = {
  common: {
    textTransform: 'none',
    height: '35px',
    width: 'auto',
    fontSize: '12px',
  },
  gift: {
    padding: '8px 20px',
    height: '40px',
    backgroundColor: 'transparent',
    color: '#F78A79',
    border: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#F25D54',
    },
  },
  begin: {
    padding: '7px 30px',
    backgroundColor: '#F78A79',
    color: 'white',
    '&:hover': {
      backgroundColor: '#F25D54',
    },
  },
  access: {
    padding: '7px 30px',
    backgroundColor: 'transparent',
    borderColor: '#F78A79',
    color: '#F78A79',
    '&:hover': {
      borderColor: '#F25D54',
      color: '#F25D54',
    },
  },
};

export const Header = ({ showButtons = true }: { showButtons?: boolean }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleBeginClick = () => router.push('/question');

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-custom-gradient p-2 text-white sm:p-6">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/logo.png"
          alt="Vineo Logo"
          className="h-auto w-32 md:w-40"
        />
      </div>

      {/* Button Container */}
      <div className="ml-auto flex w-full justify-center space-x-4 sm:w-auto sm:justify-end sm:space-x-6">
        {/* Mobile Menu */}
        <div className="relative ml-auto flex items-end sm:hidden">
          {/* WhatsApp Icon */}
          <a 
            href="https://wa.me/your-phone-number" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mr-2"
          >
            <IconButton
              className="bg-green-500 hover:bg-green-600"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon style={{ color: 'white', fontSize: '1.5rem' }} />
            </IconButton>
          </a>

          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="rounded-md bg-transparent p-2 text-vineopink"
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-12 z-50 rounded-md shadow-lg">
              <div className="min-w-max rounded-md bg-white p-4">
                <ul className="flex flex-col space-y-3 p-2">
                  <li>
                    <Link 
                      href="/" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="block font-extralight text-vineopink hover:text-gray-900"
                    >
                      Give Vineo as gift
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/question" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="block font-light text-vineopink hover:text-gray-900"
                    >
                      Begin
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="block font-light text-vineopink hover:text-gray-900"
                    >
                      Access
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        {showButtons && (
          <div className="hidden items-center space-x-4 sm:flex">
            {/* Gift Button */}
            <Button
              text="Give Vineo as a gift"
              onClick={() => console.log('Gift clicked')}
              variant="text"
              sx={{ ...buttonStyles.common, ...buttonStyles.gift }}
            />
            
            {/* Begin Button */}
            <Button
              text="Begin"
              onClick={handleBeginClick}
              variant="contained"
              sx={{ ...buttonStyles.common, ...buttonStyles.begin }}
            />
            
            {/* Access Button */}
            <Button
              text="Access"
              onClick={() => console.log('Access clicked')}
              variant="outlined"
              sx={{ ...buttonStyles.common, ...buttonStyles.access }}
            />
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/your-phone-number" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <IconButton
                className="bg-green-500 hover:bg-green-600"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon style={{ color: 'white', fontSize: '1.5rem' }} />
              </IconButton>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};