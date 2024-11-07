'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from 'src/components/Sidebar';
import SubscriptionCard from 'src/components/SubscriptionCard';
import { useLoadSubscriptionListForUserQuery, useGetSubscriptionStatusMutation } from 'src/app/redux/apiSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const SubscriptionPage = () => {
  const { data: subscriptionPlans = [], error, isLoading } = useLoadSubscriptionListForUserQuery([10, 40, 30]);
  const [getSubscriptionStatus] = useGetSubscriptionStatusMutation();
  const [activeSubscriptionType, setActiveSubscriptionType] = useState(null);

  // Fetch the active subscription status on mount
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const result = await getSubscriptionStatus().unwrap();
        console.log(result.type);
        if (result) {
          console.log(result);
          setActiveSubscriptionType(result.type);
        }
      } catch (error) {
        console.error('Error fetching subscription status:', error);
      }
    };

    fetchSubscriptionStatus();
  }, [getSubscriptionStatus]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading subscription plans</p>;

  return (
    <div className="flex min-h-screen overflow-hidden bg-gray-100 font-sans">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 z-10 h-full w-1/6 bg-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="ml-[17%] flex-1 flex items-center justify-center p-6 overflow-hidden">
        <div className="max-w-4xl w-full rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-2xl font-semibold text-gray-700 text-center">Gestiona tu suscripción</h2>

          {/* Centered Swiper wrapper */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            className="flex justify-center"
          >
            {subscriptionPlans.map((plan) => (
              <SwiperSlide key={plan._id} className="flex justify-center">
                <div className="max-w-sm">
                  <SubscriptionCard
                    title={plan.title}
                    price={`${plan.amount}€`}
                    description={plan.description}
                    perks={[plan.sub_title]}
                    renewalText={plan.duration ? `Renueva el ${plan.duration}` : null}
                    isHighlighted={plan.type === activeSubscriptionType}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex justify-end">
            <button className="rounded-md bg-red-300 px-6 py-3 font-semibold text-red-700 shadow-sm">
              Cancelar suscripción
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
