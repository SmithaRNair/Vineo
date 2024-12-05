import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import QuestionOptionsGrid from '@/components/molecules/QuestionOptionsGrid';
// import { Progress } from 'antd'; // Add this for the progress bar component

const QuestionPage = () => {
  return (
    <div className="container bg-beige bg-cover max-w-full w-full ">
      {/* Vineo logo */}
      <div className="flex items-center justify-between sm:mb-2 lg:mb-0 xl:mb-0 2xl:mb-0">
        <Image src={IMAGES.logo} alt="Vineo Logo" width={100} height={50} />
        {/* Progress bar */}
      </div>

      {/* Question Section */}

      {/* Question Cards */}
      <QuestionOptionsGrid />
    </div>
  );
};

export default QuestionPage;
