'use client';
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SubscriptionCard from '../molecules/SubscriptionCard';

const SubscriptionSection: React.FC = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center bg-beige bg-cover bg-center px-4 py-2 md:px-8">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 mt-28 font-Domine text-[3.375rem] font-bold text-vineogray">
          Elige el servicio que mejor se adapta a ti
        </h2>
        <h3 className="mb-6 mt-10 font-Domine text-[2rem] font-normal text-vineogray">
          Podrás cambiar tu suscripción en cualquier momento
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
              title="Vineo IA"
              price="5€/mes"
              description="Suscripción a la IA de Vineo"
              text="Nuestra IA te descubrirá 3 vinos que están alineados con tus gustos cada mes."
              perks={[
                'Portafolio a medida',
                '1 caja de 3 vinos al mes según tus gustos',
                'Cancelación gratuita en cualquier momento',
              ]}
              buttonText="Comenzar"
              showCommandButton={true}
              isHighlighted={true}
              // buttonBackgroundColor="#FFFFFF"
              // buttonTextColor="vineopink"
              renewalText="Pagas mes a mes, puedes cancelar en cualquier momento"
              buttonClassName="bg-white text-vineopink py-2 px-6 rounded mt-4" // White background, pink text
            />
          </SwiperSlide>

          <SwiperSlide>
            <SubscriptionCard
              title="Vineo Box"
              price="55€/mes"
              description="Suscripción con caja mensual"
              text="Pagas mes a mes, puedes cancelar en cualquier momento"
              perks={[
                'Portafolio a medida',
                '1 caja de 3 vinos más según tus gustos',
                'Cancelación gratuita en cualquier momento',
              ]}
              buttonText="Comenzar"
              //  buttonBackgroundColor="vineopink"
              // buttonTextColor="#FFFFFF"
              buttonClassName="bg-vineopink text-white py-2 px-6 rounded mt-10" // Pink background, white text
            />
          </SwiperSlide>

          {/* Pagination Bullets */}
          <div className="swiper-pagination absolute bottom-4 flex w-full justify-center"></div>
        </Swiper>
      </div>

      {/* For large screens (md and up), display cards in a row */}
      <div className="mt-12 hidden flex-wrap justify-center gap-6 sm:flex">
        <SubscriptionCard
          title="Vineo IA"
          price="5€/mes"
          description="Suscripción a la IA de Vineo"
          text="Nuestra IA te descubrirá 3 vinos que están alineados con tus gustos cada mes."
          perks={[
            'Portafolio a medida',
            '1 caja de 3 vinos al mes según tus gustos',
            'Cancelación gratuita en cualquier momento',
          ]}
          buttonText="Comenzar"
          isHighlighted={true}
          showCommandButton={true}
          //  buttonBackgroundColor="#FFFFFF"
          //     buttonTextColor="vineopink"
          buttonClassName="bg-white text-vineopink py-2 px-6 rounded mt-4" // White background, pink text
        />

        <SubscriptionCard
          title="Vineo Box"
          price="55€/mes"
          description="Suscripción con caja mensual"
          text="Pagas mes a mes, puedes cancelar en cualquier momento"

          perks={[
            'Portafolio a medida',
            '1 caja de 3 vinos más según tus gustos',
            'Cancelación gratuita en cualquier momento',
          ]}
          buttonText="Comenzar"
          //  buttonBackgroundColor="vineopink"
          //     buttonTextColor="#FFFFFF"
          buttonClassName="bg-vineopink text-white py-2 px-6 rounded mt-10" // Pink background, white text
        />
      </div>
    </div>
  );
};

export default SubscriptionSection;