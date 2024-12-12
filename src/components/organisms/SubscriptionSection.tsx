'use client';
import React from 'react';
import SubscriptionCard from '../SubscriptionCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const SubscriptionSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-beige bg-cover bg-center mt-10 py-2 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-vineogray mb-4">
          Elige el servicio que mejor se adapta a ti
        </h2>
        <h3 className="text-2xl text-vineogray mb-6">
          Vineo a tu medida
        </h3>
      </div>

      {/* Subscription Cards */}
      {/* Apply swiper for mobile only, with bullet navigation */}
      <div className="w-full sm:hidden">
        <Swiper
          slidesPerView={1} // Show one card at a time
          spaceBetween={10}
          pagination={{
            clickable: true, // Enable bullet navigation
            type: 'bullets', // Display bullet navigation
            el: '.swiper-pagination', // Ensure bullets are displayed at the bottom
          }}
          modules={[Pagination]} // Import Pagination module for navigation
        >
          <SwiperSlide>
            <SubscriptionCard
              title="90€"
              price="90€"
              description="Suscripción diaria"
              perks={[
                "Nuestro ejercicio en cualquier momento",
                "Portafolio a medida",
                "Cancelación gratuita en cualquier momento",
              ]}
              buttonText="Comenzar"
              cardClassName="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-80 md:w-1/3"
              titleClassName="text-xl font-semibold"
              priceClassName="text-3xl text-blue-500 font-bold"
              buttonClassName="bg-blue-500 text-white py-2 px-6 rounded mt-4"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SubscriptionCard
              title="200€"
              price="200€"
              description="Suscripción diaria"
              perks={[
                "Portafolio a medida",
                "1 caja de 3 vinos más según tus gustos",
                "Cancelación gratuita en cualquier momento",
              ]}
              isHighlighted={true}
              renewalText="La suscripción se renueva en 50€/día"
              highlightedText="RECOMENDADO"
              buttonText="Choose plan"
              cardClassName="bg-orange-200 shadow-xl rounded-lg p-6 text-center w-full sm:w-80 md:w-1/3"
              titleClassName="text-xl font-semibold"
              priceClassName="text-3xl text-blue-500 font-bold"
              buttonClassName="bg-blue-500 text-white py-2 px-6 rounded mt-4"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SubscriptionCard
              title="590€"
              price="590€"
              description="Suscripción diaria"
              perks={[
                "Portafolio a medida",
                "1 caja de 3 vinos más según tus gustos",
                "Cancelación gratuita en cualquier momento",
              ]}
              buttonText="Comenzar"
              cardClassName="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-80 md:w-1/3"
              titleClassName="text-xl font-semibold"
              priceClassName="text-3xl text-blue-500 font-bold"
              buttonClassName="bg-blue-500 text-white py-2 px-6 rounded mt-4"
            />
          </SwiperSlide>

          {/* Pagination Bullets */}
          <div className="swiper-pagination absolute bottom-4 w-full flex justify-center"></div>
        </Swiper>
      </div>

      {/* For large screens (md and up), display cards in a row */}
      <div className="hidden sm:flex flex-wrap justify-center gap-6 mt-12">
        <SubscriptionCard
          title="90€"
          price="90€"
          description="Suscripción diaria"
          perks={[
            "Nuestro ejercicio en cualquier momento",
            "Portafolio a medida",
            "Cancelación gratuita en cualquier momento",
          ]}
          buttonText="Comenzar"
          cardClassName="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-80 md:w-1/3"
          titleClassName="text-xl font-semibold"
          priceClassName="text-3xl text-blue-500 font-bold"
          buttonClassName="bg-blue-500 text-white py-2 px-6 rounded mt-4"
        />

        <SubscriptionCard
          title="200€"
          price="200€"
          description="Suscripción diaria"
          perks={[
            "Portafolio a medida",
            "1 caja de 3 vinos más según tus gustos",
            "Cancelación gratuita en cualquier momento",
          ]}
          isHighlighted={true}
          renewalText="La suscripción se renueva en 50€/día"
          highlightedText="RECOMENDADO"
          buttonText="Choose plan"
          cardClassName="bg-orange-200 shadow-xl rounded-lg p-6 text-center w-full sm:w-80 md:w-1/3"
          titleClassName="text-xl font-semibold"
          priceClassName="text-3xl text-blue-500 font-bold"
          buttonClassName="bg-vine text-white py-2 px-6 rounded mt-4"
        />

        <SubscriptionCard
          title="590€"
          price="590€"
          description="Suscripción diaria"
          perks={[
            "Portafolio a medida",
            "1 caja de 3 vinos más según tus gustos",
            "Cancelación gratuita en cualquier momento",
          ]}
          buttonText="Comenzar"
          cardClassName="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-80 md:w-1/3"
          titleClassName="text-xl font-semibold"
          priceClassName="text-3xl text-blue-500 font-bold"
          buttonClassName="bg-blue-500 text-white py-2 px-6 rounded mt-4"
        />
      </div>
    </div>
  );
};

export default SubscriptionSection;
