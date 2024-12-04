import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import QuestionOptionsGrid from '@/components/molecules/QuestionOptionsGrid';
// import { Progress } from 'antd'; // Add this for the progress bar component

const QuestionPage = () => {
  return (
    <div className="container mx-auto bg-beige bg-cover w-full">
      {/* Vineo logo */}
      <div className="mb-4 flex items-center justify-between px-4 py-2 ">
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
