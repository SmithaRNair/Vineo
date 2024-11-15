'use client';
import React from 'react';
import Sidebar from 'src/components/Sidebar';
import SubscriptionCard from 'src/components/SubscriptionCard';
import { useLoadSubscriptionListForUserQuery } from 'src/app/redux/apiSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

const SubscriptionPage = () => {
  const { data: subscriptionPlans = [], error, isLoading } = useLoadSubscriptionListForUserQuery([10, 40, 30]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading subscription plans</p>;

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Fixed Sidebar */}
      <Sidebar />
          {/* Main Content */}
      <div className="flex-1 p-6 overflow-x-hidden">
        <div className="ml-44 p-10 mx-auto max-w-6xl max-h-fit rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-2xl font-semibold text-gray-700">Gestiona tu suscripción</h2>

          {/* Responsive Swiper for Subscription Cards */}
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {subscriptionPlans.map((plan) => (
              <SwiperSlide key={plan._id} className="flex justify-center items-center">
                <div className="w-full max-w-[300px] h-[400px] flex justify-center items-center">
                  <SubscriptionCard
                    title={plan.title}
                    price={`${plan.amount}€`}
                    description={plan.description}
                    perks={[plan.sub_title]}
                    renewalText={plan.duration ? `Renueva el ${plan.duration}` : null}
                    isHighlighted={plan.is_current}
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
