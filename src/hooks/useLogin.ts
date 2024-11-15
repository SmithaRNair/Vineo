// src/hooks/useLogin.ts
import { useGetBoxHistoryQuery, useGetSubscriptionStatusMutation, useLoginMutation } from '@app/redux/apiSlice';
import { useState } from 'react';

export const useLogin = () => {
  const [login, { isLoading, isError }] = useLoginMutation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [getSubscriptionStatus] = useGetSubscriptionStatusMutation();
  const { data: boxHistoryData, error: boxHistoryError } = useGetBoxHistoryQuery(
    { page: 1, limit: 4 },
    { skip: !isLoggedIn }
  );

  const loginUser = async ({ email, password }: { email: string, password: string }) => {
    try {
      const result = await login({ email, password }).unwrap();
      const { accessToken, refreshToken } = result.data?.userLogin || {};
      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setIsLoggedIn(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  return { login: loginUser, isLoading, isError, boxHistoryData, boxHistoryError };
};
