// src/components/organisms/LoginForm.tsx
'use client';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useLogin } from '@/hooks/useLogin';
import FormField from '../molecules/FormField';
import Checkbox from '../atoms/Checkbox';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const { login, isLoading, isError } = useLogin();
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string().nullable().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const handleSubmit = async (values: any) => {
    const success = await login(values);
    if (success) {
      router.push('/useDashboard');
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <FormField name="email" type="email" label="Email" placeholder="Enter your email" />
          <FormField name="password" type="password" label="Password" placeholder="Enter your password" password />
          
          <div className="flex items-center justify-between mb-4">
            <Checkbox name="rememberMe" label="Remember me" />
            <Link href="#" className="font-inter text-sm text-gray-600 hover:text-gray-900">
              Have you forgotten your password?
            </Link>
          </div>

          <button type="submit" className="w-full rounded-lg bg-vineopink px-4 py-2 font-inter font-bold text-white transition hover:bg-red-400">
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

  );
};

export default LoginForm;
