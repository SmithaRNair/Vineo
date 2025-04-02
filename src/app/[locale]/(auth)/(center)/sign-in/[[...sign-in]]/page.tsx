// src/auth/center/LoginPage.tsx
import Image from 'next/image';

import LoginForm from '@/components/organisms/LoginForm';
import { IMAGES } from '@/constants/AppConst';

const LoginPage = () => (
  <div className="relative h-screen w-screen bg-glass-bottle bg-80p bg-bottom bg-no-repeat ">
    <div className="absolute left-0 top-0 m-4">
      <Image src={IMAGES.logo} alt="Logo" width={100} height={50} />
    </div>
    <div className="flex size-full items-center justify-center md:justify-end">
      <div className="mx-4 mt-10 w-full max-w-md rounded-lg bg-white/5 px-6 py-8 shadow-login-shadow sm:max-w-lg sm:px-8 md:mr-20 md:w-auto md:px-20">
        <h2 className="mb-4 text-center font-inter text-3xl font-bold text-logingray sm:text-2xl ">Welcome to Vineo</h2>
        <h3 className="mb-6 text-center font-inter text-xl font-bold text-vineogray sm:text-xl">Login</h3>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default LoginPage;
