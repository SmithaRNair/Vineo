import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';
import type { Box } from '@/types/BoxTypes';

import CustomButton from './CustomButton';
import WineCard from './WineCard';

const BoxItem = ({ box }: { box: Box }) => (
  <div className="flex-1 flex-col items-center w-full lg:w-4/5">
    <div className="p-10 m-5 rounded-lg border-2 border-gray-200 bg-white p-10 shadow-md">
      <div className="mb-4 text-left font-inter text-2xl text-logingray font-medium text-vineogray">
        {box.is_pending
          ? 'Tu recomendación más reciente'
          : `Tu caja de ${new Date(box.date).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}`}
      </div>

      {/* Main container for wines and chart with full width */}
      <div className="flex justify-between lg:w-full lg:flex-row">

        {/* Wine Box Container */}
        <div className="flex w-full gap-6 rounded-lg border-2 border-gray-200 bg-white p-5 shadow-md lg:w-2/3">
          {box.wines.map(wine => (
            <div key={wine.wine_id} className="sm:w-1/2 lg:ml-5 lg:w-1/3 xl:w-1/4">
              <WineCard wine={wine} />
          </div>
          ))}
        </div>

        {/* Right Side: Chart - Align to right */}
        <div className="mt-6  flex-1 w-full justify-end lg:ml-10 lg:mt-0 lg:w-1/3">
          <div className="size-full max-w-[300px] rounded-lg bg-white p-4 shadow-md">
            <div className="mb-2 text-center font-inter text-sm font-semibold">Análisis de Vinos</div>
            <Image
              src={IMAGES.chart}
              alt="Radar Graph"
              width={350}
              height={350}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full justify-center">
        <CustomButton label="¡Envíame esta caja a casa!" onClick={() => alert('Sending box!')} />
      </div>
    </div>
  </div>
);

export default BoxItem;
