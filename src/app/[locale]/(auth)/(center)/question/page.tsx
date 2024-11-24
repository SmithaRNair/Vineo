import React from 'react';
import QuestionOptionsGrid from './QuestionOptionsGrid';
import Image from 'next/image';
import {IMAGES} from '@/constants/AppConst'; 
//import { Progress } from 'antd'; // Add this for the progress bar component

const QuestionPage = () => {
  return (
    <div className="container mx-auto bg-[#F9F7F1]">
      {/* Vineo logo */}
      <div className="flex justify-between items-center mb-8 border shadow-sm px-4 py-5">
        <Image src={IMAGES.logo} alt="Vineo Logo" width={100} height={50}/>
        {/* Progress bar */}
      </div>

      {/* Question Section */}
      <h1 className="text-3xl font-bold mb-4 text-center">¿Cómo tomas tu café?</h1> {/* Spanish Question */}

      {/* Icon Section */}
      <div className="flex justify-center mb-8">
        <Image src={IMAGES.answer} alt="Coffee Icon" width={180} height={143} />
      </div>

      {/* Question Cards */}
      <QuestionOptionsGrid />
    </div>
  );
};

export default QuestionPage;
