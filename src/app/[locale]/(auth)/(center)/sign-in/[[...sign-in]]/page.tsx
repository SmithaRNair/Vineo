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

// // src/auth/center/LoginPage.tsx
// 'use client';

// import { useGetBoxHistoryQuery, useGetSubscriptionStatusMutation, useLoginMutation } from '@app/redux/apiSlice';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import * as Yup from 'yup';

// import { IMAGES } from '@/constants/AppConst';

// type LoginFormValues = {
//   email: string;
//   password: string;
//   rememberMe: boolean;
// };

// const LoginPage = () => {
//   const [login, { isLoading, isError }] = useLoginMutation();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [pageParams] = useState({ page: 1, limit: 4 });

//   const [getSubscriptionStatus] = useGetSubscriptionStatusMutation();
//   const router = useRouter();
//   const { data: boxHistoryData, error: boxHistoryError } = useGetBoxHistoryQuery(pageParams, {
//     skip: !isLoggedIn,
//   });

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .nullable() // Allow null values
//       .email('Invalid email format')
//       .required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   const initialValues: LoginFormValues = {
//     email: '',
//     password: '',
//     rememberMe: false,
//   };

//   const handleSubmit = async (values: LoginFormValues) => {
//     try {
//       const result = await login({
//         email: values.email,
//         password: values.password,
//       }).unwrap();

//       console.log('Login response data:', result);

//       // Ensure that userLogin object exists and contains tokens
//       if (result?.data?.userLogin?.accessToken && result?.data?.userLogin?.refreshToken) {
//         const { accessToken, refreshToken } = result.data.userLogin;
//         setIsLoggedIn(true);

//         // Store tokens
//         localStorage.setItem('accessToken', accessToken);
//         localStorage.setItem('refreshToken', refreshToken);

//         // Redirect to the dashboard
//         router.push('/useDashboard'); // Adjust this path based on where the dashboard is
//       } else {
//         console.error('Failed to retrieve tokens');
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       getSubscriptionStatus({})
//         .unwrap()
//         .then((subscriptionStatusResult) => {
//           console.log('Subscription Status:', subscriptionStatusResult);
//         })
//         .catch((error) => {
//           console.error('Error fetching subscription status:', error);
//         });
//     }
//     console.log('Fetching Box History-:', boxHistoryData);
//     if (boxHistoryError) {
//       console.error('Error fetching box history-:', boxHistoryError);
//     }
//   }, [isLoggedIn, getSubscriptionStatus, boxHistoryData, boxHistoryError]);

//   const togglePasswordVisibility = () => setShowPassword(prev => !prev);

//   return (
//     <div className="relative h-screen w-screen bg-glass-bottle bg-70p bg-center bg-no-repeat ">

//       <div className="absolute left-0 top-0 m-4">
//         <Image src={IMAGES.logo} alt="Logo" width={100} height={50} />
//       </div>

//       <div className="flex h-screen w-full items-center justify-center md:justify-end">
//         <div className="mx-4 mt-10 w-full max-w-md rounded-xl bg-white/0 p-8 shadow-xl md:mr-20 md:w-max">
//           <div className="mb-4 whitespace-nowrap text-center font-inter text-2xl font-bold ">Welcome to Vineo</div>
//           <div className="text-40 mb-6 text-center font-inter text-20px font-medium">Login</div>

//           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//             {() => (
//               <Form>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block font-inter text-gray-700">Email</label>
//                   <Field type="email" name="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300" required />
//                   <ErrorMessage name="email" component="div" className="text-red-500" />
//                 </div>

//                 <div className="relative mb-4">
//                   <label htmlFor="password" className="block font-inter text-gray-700">Password</label>
//                   <Field
//                     type={showPassword ? 'text' : 'password'} // Toggle password type here
//                     name="password"
//                     className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                     required
//                   />
//                   <ErrorMessage name="password" component="div" className="text-red-500" />

//                   {/* Toggle Password Visibility Icon with Accessibility Features */}
//                   <span
//                     onClick={togglePasswordVisibility}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' || e.key === ' ') {
//                         togglePasswordVisibility(); // Trigger toggle on Enter or Space key press
//                       }
//                     }}
//                     role="button" // Define role to make it an interactive element
//                     tabIndex={0} // Make the element focusable
//                     className="absolute inset-y-0 right-0 flex  cursor-pointer items-center pr-3 pt-6"
//                     aria-label="Toggle password visibility" // Add label for screen readers
//                   >
//                     <Image
//                       src="/images/eye.png" // Your eye icon image
//                       alt="Toggle Password Visibility"
//                       width={20}
//                       height={20}
//                     />
//                   </span>
//                 </div>

//                 <div className="mb-4 flex items-center justify-between">
//                   <Field
//                     id="rememberMe"
//                     type="checkbox"
//                     name="rememberMe"
//                     className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                   />

//                   <label htmlFor="rememberMe" className="inline-flex items-center font-inter ">
//                     <span className="ml-2 text-gray-700">Remember me</span>
//                   </label>

//                   <Link href="#" className="ml-5 font-inter text-sm text-gray-600 hover:text-gray-900">Have you forgotten your password?</Link>
//                 </div>

//                 <button type="submit" className="w-full rounded-lg bg-vineopink px-4 py-2 font-inter font-bold text-white transition hover:bg-red-400">
//                   {isLoading ? 'Logging in...' : 'Login'}
//                 </button>
//                 {isError && <div className=" mt-2 text-red-500">Login failed. Please try again.</div>}

//                 <button type="button" className="mt-4 flex w-full items-center justify-center rounded-lg px-4 py-2 transition hover:bg-gray-300">
//                   <Image
//                     src="/images/google.png"
//                     alt="Google"
//                     width={50}
//                     height={50}
//                     className="mr-2"
//                   />
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
