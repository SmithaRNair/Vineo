'use client';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

export default function CenteredLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by checking localStorage for the access token
    const accessToken = localStorage.getItem('accessToken');

    // If no access token is found, redirect to the login page
    if (!accessToken) {
      router.push('/sign-in');
    }
  }, [router]);

  // Render the children if the user is authenticated
  return <>{children}</>;
}
