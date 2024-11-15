// src/services/tokenService.ts
export const getAccessToken = () => localStorage.getItem('accessToken');
export const getRefreshToken = () => localStorage.getItem('refreshToken');

export const storeTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};
