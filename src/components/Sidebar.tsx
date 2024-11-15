// components/Sidebar.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IMAGES } from '@/constants/AppConst';

const Sidebar: React.FC = () => {
    const router = useRouter();

    const handleSignOut = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        router.push('/');
    };

    return (
        <div
            className="fixed  top-6 z-10 flex-col justify-between rounded-xl bg-white bg-sidebar-gradient backdrop-blur-sidebar-blur shadow-sidebar-shadow overflow-y-auto"
        >
            <div>
                <div className="flex items-center justify-center border-b p-6">
                    <Image src={IMAGES.logo} alt="Logo" width={100} height={50} />
                </div>
                <nav className="mt-4">
                    {/* Add space between list items */}
                      <ul> 
                      <li className="flex p-4">
                      <div className="flex items-center w-full md:px-4 md:py-2 bg-transparent md:bg-white md:border-r-4 md:border-vineopink md:shadow-sm">
                                <Image src={IMAGES.home} alt="Home Icon" width={24} height={24} className="mr-2" />
                                <span className="text-vineopink font-medium hidden md:inline">Home</span>
                            </div>
                        </li>
                        <li>
                            <a href="/orders" className="block flex items-center p-4 text-gray-700 hover:bg-gray-100">
                                <Image src={IMAGES.hist} alt="Virtual Cellar" width={24} height={24} className="mr-2" />
                                <span className="hidden font-medium md:inline">Virtual Cellar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/subscription" className="block flex items-center p-4 text-gray-700 hover:bg-gray-100">
                                <Image src={IMAGES.star} alt="Subscription" width={24} height={24} className="mr-2" />
                                <span className="hidden font-medium md:inline">Subscription</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="block flex items-center p-4 text-gray-700 hover:bg-gray-100">
                                <Image src={IMAGES.ajust} alt="Settings" width={24} height={24} className="mr-2" />
                                <span className="hidden font-medium md:inline">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="/history" className="block flex items-center p-4 text-gray-700 hover:bg-gray-100">
                                <Image src={IMAGES.users} alt="History" width={24} height={24} className="mr-2" />
                                <span className="hidden font-medium md:inline">History</span>
                            </a>
                        </li>
                                          
                        <li className='mt-8'>
                            <button 
                                onClick={handleSignOut}
                                className="block flex items-center p-4 text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                                <Image src={IMAGES.signout} alt="Sign Out" width={24} height={24} className="mr-2" />
                                <span className="hidden font-medium md:inline">Sign Out</span>
                            </button>
                        </li>
                        
                      </ul>
                </nav>
            </div>
            <div className="p-4 mt-8">
                <a href="/carlos" className="block flex items-center p-2 text-gray-700 hover:bg-gray-100">
                    <Image src={IMAGES.coins} alt="Carlos Bernabeu" width={24} height={24} className="mr-2" />
                    <span className="hidden font-medium md:inline">Carlos Bernabeu</span>
                </a>
                <div className="hidden pl-10 text-sm text-gray-500 md:block">400 Vineo Coins</div>
            </div>
        </div>
    );
};

export default Sidebar;
