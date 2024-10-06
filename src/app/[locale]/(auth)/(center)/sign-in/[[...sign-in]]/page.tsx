// src/auth/center/LoginPage.tsx

'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';

import { useLoginMutation } from './apiSlice'; // Use the mutation from Redux

const LoginPage = () => {
  const [login, { isLoading, isError }] = useLoginMutation();
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const handleSubmit = async (values: any) => {
    /* eslint-disable no-console */
    try {
      const result = await login({
        email: values.email,
        password: values.password,
      }).unwrap();
      console.log('Login successful:', result);
      // Handle success: store tokens, redirect, etc.
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="relative h-screen w-screen bg-contain bg-center bg-no-repeat md:bg-cover"
      style={{ backgroundImage: 'url("/images/glass-bottle.png")', backgroundSize: '70% 70%' }}
    >
      <div className="absolute left-0 top-0 m-4">
        <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
      </div>

      <div className="flex h-screen w-full items-center justify-center md:justify-end">
        <div className="mx-4 mt-10 w-full max-w-md rounded-xl bg-white/0 p-8 shadow-xl md:mr-20 md:w-max">
          <h2 className="mb-4 text-center text-2xl font-bold">Welcome to Vineo</h2>
          <p className="mb-6 text-center">Login</p>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {() => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <Field type="email" name="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300" required />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <Field
                    type={showPassword ? 'text' : 'password'} // Toggle password type here
                    name="password"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    required
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />

                  {/* Toggle Password Visibility Icon with Accessibility Features */}
                  <span
                    onClick={togglePasswordVisibility}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        togglePasswordVisibility(); // Trigger toggle on Enter or Space key press
                      }
                    }}
                    role="button" // Define role to make it an interactive element
                    tabIndex={0} // Make the element focusable
                    className="absolute inset-y-0 right-0 flex  cursor-pointer items-center pr-3 pt-6"
                    aria-label="Toggle password visibility" // Add label for screen readers
                  >
                    <Image
                      src="/images/eye.png" // Your eye icon image
                      alt="Toggle Password Visibility"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <Field
                    id="rememberMe"
                    type="checkbox"
                    name="rememberMe"
                    className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />

                  <label htmlFor="rememberMe" className="inline-flex items-center">
                    <span className="ml-2 text-gray-700">Remember me</span>
                  </label>

                  <Link href="#" className="ml-5 text-sm text-gray-600 hover:text-gray-900">Have you forgotten your password?</Link>
                </div>

                <button type="submit" className="w-full rounded-lg bg-[#F78A79] px-4 py-2 font-bold text-white transition hover:bg-red-600">
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
                {isError && <div className="mt-2 text-red-500">Login failed. Please try again.</div>}

                <button type="button" className="mt-4 flex w-full items-center justify-center rounded-lg px-4 py-2 transition hover:bg-gray-300">
                  <Image
                    src="/images/google.png"
                    alt="Google"
                    width={50}
                    height={50}
                    className="mr-2"
                  />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
