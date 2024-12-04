import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // For Facebook and Instagram
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; 
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        {/* Logo and Links Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Vineo Logo" className="w-32" />
          </div>
          
        </div>
        <div className="flex justify-center items-center gap-10 mb-4">
            <a href="#" className="text-gray-700 text-sm">Terms Of Use</a>
            <a href="#" className="text-gray-700 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-700 text-sm">Support</a>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center  mb-8">
          <a href="https://wa.me/" target="_blank" className="bg-vineopink rounded-full text-white hover:text-green-800 mx-2">
            <WhatsAppIcon size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" className="bg-white rounded-full  text-vineopink hover:text-blue-800 mx-2">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" className="bg-vineopink rounded- text-white hover:text-pink-800 mx-2">
            <FaInstagram size={24} />
          </a>
          
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-600">
          <p>Copyright © 2023 Vineo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
