import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import { IMAGES } from '@/constants/AppConst';
import type { Box } from '@/types/BoxTypes';

import CustomButton from './CustomButton';
import WineCard from './WineCard';

const BoxItem = ({ box }: { box: Box }) => (
  <div className="box-item mb-4 flex flex-col rounded-lg border-2 border-gray-200 bg-white p-6 shadow-md md:mb-6">
    <div className="mb-4 font-inter text-45px text-lg font-medium text-vineogray text-center">
      {box.is_pending
        ? 'Tu recomendación más reciente'
        : `Tu caja de ${new Date(box.date).toLocaleString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}`}
    </div>
    <div className="lg:flex lg:flex-col lg:justify-between">
      <div className="relative bg-gray-50 lg:flex lg:flex-wrap lg:gap-x-2 lg:gap-y-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={5}
          slidesPerView={1} // Show one slide at a time
          pagination={{
            clickable: true,
            el: '.custom-pagination', // Custom element for pagination
          }}
          loop={false} // Disable looping
          allowTouchMove={true} // Enable swipe
          breakpoints={{
            1024: {
              slidesPerView: 3, // Show 3 slides on larger screens
              allowTouchMove: false, // Disable swipe on larger screens
              pagination: false, // Hide pagination for larger screens
            },
            320: {
              slidesPerView: 1, // Show 1 slide on smaller screens
              allowTouchMove: true, // Enable swipe for smaller screens
              pagination: { clickable: true }, // Show pagination
            },
          }}
          style={{ maxWidth: '100%', margin: '0 auto' }}
        >
          {box.wines.map((wine) => (
            <SwiperSlide key={wine.wine_id} className="mb-4 lg:mb-0 w-full">
              <WineCard wine={wine} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4 flex justify-center absolute bottom-4 w-full"></div> {/* Custom pagination */}
      </div>
      <div className="mt-6 flex items-center justify-center rounded-lg bg-white p-4 shadow-md lg:mt-8">
        <div>
          <div className="mb-2 font-inter text-sm font-semibold sm:mb-4 sm:text-lg">Análisis de Vinos</div>
          <Image
            src={IMAGES.chart}
            alt="Radar Graph"
            width={300}
            height={200}
            className="sm:w-[300px]"
          />
        </div>
      </div>
    </div>
    <div className="mt-6 flex w-full justify-center">
      <CustomButton label="¡Envíame esta caja a casa!" onClick={() => alert('Sending box!')} />
    </div>
  </div>
);

export default BoxItem;