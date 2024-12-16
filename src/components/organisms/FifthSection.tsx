'use client';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import TitlesButton from '../molecules/TitlesButton'; // Adjust the import path accordingly

const FifthSection = () => {
  return (
    <section className="flex flex-col items-center justify-between bg-beige py- lg:flex-row">
      {/* Left side: GIF */}
      <div className="mb-8 flex-1 lg:mb-0">
        <img src={IMAGES.gif2} alt="Vineo Gif"/>
      </div>

      {/* Right side: TitlesButton and background image */}
      <div className="flex-1  bg-bottleglass bg-right ">

        {/* TitlesButton molecule */}
        {/* <div className="relative z-10"> */}
        <TitlesButton
          title="Tus Beneficios"
          subtitle="Vineo Coins"
          paragraphs={[
            'Las Vineo Coins te permitirán acceder a descuentos exclusivos, vinos premium y experiencias únicas.',
          ]}
          buttonText="Comienza"
          buttonLink="/comienza"
          reverseLayout={false} // Adjust this if you want to reverse the layout
          showButton={true}
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default FifthSection;
