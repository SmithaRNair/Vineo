import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/60 backdrop-blur-md text-white px-6 md:px-12 py-4 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <span className="text-lg font-semibold tracking-widest">V I N E</span>
        <span className="bg-red-500 text-white px-2 py-1 text-sm rounded-md">O</span>
      </div>

      {/* Buttons & WhatsApp */}
      <div className="flex items-center space-x-4">
        <button className="hidden md:block text-sm text-red-300 hover:text-red-400">
          Give Vineo as a gift
        </button>
        <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm">
          Begin
        </button>
        <button className="border border-red-400 text-red-400 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md text-sm">
          Access
        </button>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-400 text-2xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
