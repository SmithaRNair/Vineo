// components/Sidebar.tsx
import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/AppConst';

const Sidebar = () => (
  <div className="fixed left-0 top-0 z-10 h-screen w-16 flex-col justify-between rounded-xl bg-white shadow-lg md:w-64">
    <div>
      <div className="flex items-center justify-center border-b p-6">
        <Image src={IMAGES.logo} alt="Logo" width={100} height={50} />
      </div>
      <nav className="mt-4">
        <ul>
          <li className="flex items-center bg-gray-100 p-4 text-vineopink">
            <Image src={IMAGES.home} alt="Home Icon" width={24} height={24} className="mr-2" />
            <span className="hidden font-medium md:inline">Inicio</span>
          </li>
          <li>
            <a href="/orders" className="block flex items-center p-4 text-gray-700 hover:bg-gray-100">
              <Image src={IMAGES.hist} alt="Bodega virtual" width={24} height={24} className="mr-2" />
              <span className="hidden font-medium md:inline">Bodega virtual</span>
            </a>
          </li>
          <li>
            <a href="/subscription" className="block flex items-center p-4 text-gray-700 hover:bg-gray-100">
              <Image src={IMAGES.star} alt="Subscripción" width={24} height={24} className="mr-2" />
              <span className="hidden font-medium md:inline">Subscripción</span>
            </a>
          </li>
          <li>
            <a href="/settings" className="block flex items-center p-4 text-gray-700 hover:bg-gray-100">
              <Image src={IMAGES.ajust} alt="Ajustes" width={24} height={24} className="mr-2" />
              <span className="hidden font-medium md:inline">Ajustes</span>
            </a>
          </li>
          <li>
            <a href="/signout" className="block flex items-center p-4 text-gray-700 hover:bg-gray-100">
              <Image src={IMAGES.signout} alt="Cerrar sesión" width={24} height={24} className="mr-2" />
              <span className="hidden font-medium md:inline">Cerrar sesión</span>
            </a>
          </li>


          <li>
            <a href="/history" className="block flex items-center p-4 text-gray-700 hover:bg-gray-100">
              <Image src={IMAGES.users} alt="Cerrar sesión" width={24} height={24} className="mr-2" />
              <span className="hidden font-medium md:inline">History</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="p-4">
      <a href="/carlos" className="block flex items-center p-2 text-gray-700 hover:bg-gray-100">
        <Image src={IMAGES.coins} alt="Carlos Bernabeu" width={24} height={24} className="mr-2" />
        <span className="hidden font-medium md:inline">Carlos Bernabeu</span>
      </a>
      <div className="hidden pl-10 text-sm text-gray-500 md:block">400 Vineo Coins</div>
    </div>
  </div>
);

export default Sidebar;
