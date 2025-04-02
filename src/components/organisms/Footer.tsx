import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/AppConst';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
// For Facebook and Instagram
const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-gradient py-2">
      <div className="mx-24  mt-5 mb-14 border-t border-[#958974]"></div>
      <div className="container mx-auto px-6">
        {/* Logo and Links Section */}
        {/* <div className="flex justify-between items-center mb-6"> */}
        <div className="mt-8 flex items-center mb-12">
          <img src="/images/logo.png" alt="Vineo Logo" className="h-[4.5rem]" />
        </div>
        /
        <div className="mb-4  flex font-inter font-semibold text-xl items-center  text-gray-700 justify-center gap-12">
        <a href="#" className="tracking-widest">Terms Of Use</a>
        <a href="#" className="tracking-widest">Privacy Policy</a>
        <a href="#" className="tracking-widest">Support</a>
        </div>
        <div className='flex  justify-center mt-14 mb-8 font-Domine font-normal text-xl text-vineogray'>Follow as on social media</div>

        {/* Social Media Section */}
        <div className="mb-20 flex  justify-center gap-5">
          <a href="https://wa.me/" target="_blank" className="mx-2 rounded-full bg-vineopink text-white hover:text-green-800">
            
            <Image src={IMAGES.watsap} width={37} height={37}/>
          </a>
          <a href="https://facebook.com" target="_blank" className="mx-2 rounded-full  bg-white text-vineopink hover:text-blue-800">
          <Image src={IMAGES.facebk} width={37} height={37}/>
          </a>
          <a href="https://instagram.com" target="_blank" className="mx-2 rounded-full bg-vineopink text-white hover:text-pink-800">
          <Image src={IMAGES.insta} width={37} height={37}/>
          </a>

        </div>

        {/* Copyright Section */}
        <div className="text-center font-inter text-xl text-gray-600">
          <p>Copyright © 2023 Vineo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
