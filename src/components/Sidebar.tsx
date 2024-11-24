'use client';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

const Sidebar: React.FC = () => {
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/');
  };

  return (
    <div className="fixed top-6 z-10 inline-flex w-auto flex-col justify-between overflow-y-auto rounded-xl bg-white bg-sidebar-gradient shadow-sidebar-shadow backdrop-blur-sidebar-blur">
      <div>
        <div className="flex items-center justify-center border-b p-6">
          <Image src={IMAGES.logo} alt="Logo" width={100} height={50} className="w-24 md:w-28 lg:w-32" />
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <a
                href="/home"
                className="block flex items-center p-4 text-gray-700 hover:border-r-4 hover:border-red-400 hover:bg-gray-100"
              >
                <Image src={IMAGES.home} alt="Home Icon" width={24} height={24} className="mr-2" />
                <span className="hidden text-3xl font-bold text-vineopink md:inline md:text-base">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/orders"
                className="block flex items-center p-4 text-vineogray hover:border-r-4 hover:border-red-400 hover:bg-gray-100"
              >
                <Image src={IMAGES.hist} alt="Virtual Cellar" width={24} height={24} className="mr-2" />
                <span className="hidden text-3xl font-medium md:inline md:text-base">Virtual Cellar</span>
              </a>
            </li>
            <li>
              <a
                href="/subscription"
                className="block flex items-center p-4 text-vineogray hover:border-r-4 hover:border-red-400 hover:bg-gray-100"
              >
                <Image src={IMAGES.star} alt="Subscription" width={24} height={24} className="mr-2" />
                <span className="hidden text-3xl font-medium md:inline md:text-base">Subscription</span>
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="block flex items-center p-4 text-vineogray hover:border-r-4 hover:border-red-400 hover:bg-gray-100"
              >
                <Image src={IMAGES.ajust} alt="Settings" width={24} height={24} className="mr-2" />
                <span className="hidden text-3xl font-medium md:inline md:text-base">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="/history"
                className="block flex items-center p-4 text-vineogray hover:border-r-4 hover:border-red-400 hover:bg-gray-100"
              >
                <AccessTimeIcon className="mr-2" fontSize="small" />
                <span className="hidden text-xs font-medium md:inline md:text-base">History</span>
              </a>
            </li>

            <li className="mt-8">
              <button
                onClick={handleSignOut}
                className="block flex w-full items-center p-4 text-left text-vineogray hover:border-r-4 hover:border-red-400 hover:bg-gray-100"
              >
                <Image src={IMAGES.signout} alt="Sign Out" width={24} height={24} className="mr-2" />
                <span className="hidden text-3xl font-medium md:inline md:text-base">Sign Out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8 p-4">
        <a
          href="/carlos"
          className="block flex items-center p-2 text-vineogray hover:border-r-4 hover:border-red-400 hover:bg-gray-100"
        >
          <Image src={IMAGES.coins} alt="Carlos Bernabeu" width={24} height={24} className="mr-2 text-2xl font-normal" />
          <span className="hidden text-3xl font-medium md:inline md:text-base">Carlos Bernabeu</span>
        </a>
        <div className="hidden pl-10 text-sm text-vineogray md:block">400 Vineo Coins</div>
      </div>
    </div>
  );
};

export default Sidebar;
