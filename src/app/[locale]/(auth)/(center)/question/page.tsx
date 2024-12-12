import Image from 'next/image';
import React from 'react';

import QuestionOptionsGrid from '@/components/organisms/QuestionOptionsGrid';
import { IMAGES } from '@/constants/AppConst';
import { Header } from '@/components/molecules/Header';

// import { Progress } from 'antd'; // Add this for the progress bar component

const QuestionPage = () => {
  return (
    <div className="container w-full max-w-full bg-beige bg-cover ">
      {/* Vineo logo */}
      {/* <div className="flex items-center justify-between sm:mb-2 lg:mb-0 xl:mb-0 2xl:mb-0">
        <Image src={IMAGES.logo} alt="Vineo Logo" width={100} height={50} /> */}
        {/* Progress bar */}
      {/* </div> */}
        <Header showButtons={false}/>
      

      {/* Question Section */}

      {/* Question Cards */}
      <QuestionOptionsGrid />
      
    </div>
  );
};

export default QuestionPage;
