'use client';
import { Swiper, SwiperSlide } from "swiper/react"; // For core functionality of Swiper
import { Navigation, Pagination } from "swiper"; // Modules for extra functionality
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles


import { useGetBoxHistoryQuery } from '@app/redux/apiSlice'; // Adjust the import path
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import SmoothScrolling from '@/components/SmoothScrolling';
import { IMAGES } from '@/constants/AppConst';

type Wine = {
  wine_id: string;
  wine_name: string;
  image: string;
  pair_with: string;
  philosophy: string;
  about: string;
  rating: number;
  is_reviewed: boolean;
  score: number;
  area: string;
  store: string;
  likeness: string;
};

type Box = {
  box_id: string;
  date: string;
  count: number;
  is_pending: boolean;
  type: string;
  wines: Wine[];
};

const UserDashboard = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Box[]>([]);
  const limit = 4;
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const router = useRouter();

  // Fetch the box history data
  const { data, error, isLoading } = useGetBoxHistoryQuery(
    { page, limit },
    { skip: !isAuthenticated },
  );

  // Check accessToken on component mount
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/auth/center/LoginPage');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Populate boxes when data is received
  useEffect(() => {
    if (data?.data?.getBoxHistory?.boxes) {
      const newBoxes = data.data.getBoxHistory.boxes;
      if (newBoxes.length > 0) {
        setItems(prevItems => [...prevItems, ...newBoxes]);
        setHasMore(newBoxes.length === limit);
      } else {
        setHasMore(false);
        if (observer.current) {
          observer.current.disconnect();
        }
      }
    }

    if (error) {
      console.error('Error fetching boxhistory:', error);
    }
  }, [data, error]);

  // Infinite scroll using IntersectionObserver
  const handleInfiniteScroll = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingMore || isLoading || !hasMore) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          setIsFetchingMore(true);
          setPage(prevPage => prevPage + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }

      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    },
    [isFetchingMore, isLoading, hasMore],
  );

  const renderStars = (rating: number) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array(filledStars).fill(0).map((_, index) => (
          <span key={`filled-${index}`} className="text-vineopink">★</span>
        ))}
        {hasHalfStar && (
          <span className="relative text-vineopink">
            <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              ★
            </span>
            <span className="text-gray-300">★</span>
          </span>
        )}
        {Array(emptyStars).fill(0).map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">★</span>
        ))}
      </>
    );
  };

  if (!isAuthenticated) {
    return <div>Checking authentication...</div>;
  }

  if (isLoading && page === 1) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error.message}
      </div>
    );
  }

  return (

    <SmoothScrolling>
      <div className="flex min-h-screen bg-gray-100">
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

        <main className="ml-16 flex-1 p-4 md:ml-64 md:p-8">
          {items.length
            ? (
                items.map((box, index) => (
                  <div
                    key={index}
                    className="box-item mb-4 rounded-lg border-2 border-gray-200 bg-white p-6 shadow-md md:mb-6"
                    ref={index === items.length - 1 ? handleInfiniteScroll : null}
                  >
                    <div className="mb-4 font-inter text-45px text-lg font-medium text-vineogray">
                      {box.is_pending
                        ? 'Tu recomendación más reciente'
                        : `Tu caja de ${new Date(box.date).toLocaleString('es-ES', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}`}
                    </div>

                    <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-12 lg:space-y-0">
                      <div className="flex-1 rounded-lg bg-gray-50 p-4 shadow-md">
                      
                          {box.wines.map((wine) => (
                             <div className="wine-item flex min-w-[160px] shrink-0 flex-col items-center">
                                <Image
                                  src={wine.image}
                                  alt={wine.wine_name}
                                  layout="intrinsic"
                                  width={80}
                                  height={120}
                                  className="mb-2"
                                />
                                <div className="truncate font-inter text-sm font-medium text-vineopink md:text-lg">
                                  {wine.wine_name}
                                </div>
                                <div className="truncate font-inter text-sm text-vineogray md:text-base">
                                  {wine.area || 'Unknown region'}
                                </div>
                                <div className="mt-1 flex md:mt-2">
                                  <div className="ml-2">{renderStars(wine.rating || 0)}</div>
                                </div>
                              </div>
                            
                          ))}
                        
                      </div>
                      <div className="order-last flex items-center justify-center rounded-lg bg-white p-4 shadow-md lg:order-last lg:w-1/3">
                        <div>
                          <div className="mb-2 font-inter text-sm font-semibold sm:mb-4 sm:text-lg">Análisis de Vinos</div>
                          <Image src={IMAGES.chart} alt="Radar Graph" width={200} height={150} className="sm:w-[300px]" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <button className="rounded-xl bg-vineopink px-6 py-3 text-white hover:bg-rose-300">
                        ¡Envíame esta caja a casa!
                      </button>
                    </div>
                  </div>
                ))
              )
            : (
                <div>No boxes available.</div>
              )}

          {isFetchingMore && (
            <div className="mt-6 flex justify-center md:mt-8">
              <div className="loader">Cargando más...</div>
            </div>
          )}
        </main>
      </div>
    </SmoothScrolling>

  );
};

export default UserDashboard;
