import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';
import type { Box } from '@/types/BoxTypes';

import CustomButton from './CustomButton';
import WineCard from './WineCard';


const BoxItem = ({ box }: { box: Box }) => (
  <div className="flex flex-col items-center w-full lg:w-4/5">
    <div className="w-full box-item mb-4 rounded-lg border-2 border-gray-200 bg-white p-10 shadow-md">
      <div className="mb-4 font-inter text-lg font-medium text-vineogray text-left">
        {box.is_pending
          ? 'Tu recomendación más reciente'
          : `Tu caja de ${new Date(box.date).toLocaleString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}`}
      </div>

      {/* Main container for wines and chart with full width */}
      <div className="ml-10 flex flex-col lg:flex-row lg:justify-between items-start w-full">
        
        {/* Wine Box Container */}
        <div className="flex gap-4 p-4 rounded-lg border border-gray-200 bg-white shadow-md w-2/3 overflow-x-auto">
          {box.wines.map((wine) => (
            <div key={wine.wine_id} className="min-w-[160px]">
              <WineCard wine={wine} />
            </div>
          ))}
        </div>

        {/* Right Side: Chart */}
        <div className="mt-6 lg:mt-0 lg:ml-4 w-1/3">
          <div className="rounded-lg bg-white p-4 shadow-md w-full h-full">
            <div className="mb-2 font-inter text-sm font-semibold text-center">Análisis de Vinos</div>
            <Image
              src={IMAGES.chart}
              alt="Radar Graph"
              width={300}
              height={200}
              className="w-full h-auto"
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
