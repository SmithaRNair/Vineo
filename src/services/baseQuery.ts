// src/services/baseQuery.ts
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken, getRefreshToken, storeTokens } from './tokenService';
import { REFRESH_TOKEN_QUERY } from '../graphql/queries'; // Import the GraphQL query for token refresh

const apiUrl = 'https://vineoback-gh-qa.caprover2.innogenio.com/graphql';

// Create a reusable base query for fetching data and refreshing tokens
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      const accessToken = getAccessToken();
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  })(args, api, extraOptions);

  if (result?.data?.errors?.[0]?.extensions?.response?.statusCode === 401) {
    const refreshToken = getRefreshToken();
    const accessToken = getAccessToken();

    if (refreshToken && accessToken) {
      const refreshResult = await fetchBaseQuery({
        baseUrl: apiUrl,
        method: 'POST',
        body: {
          query: REFRESH_TOKEN_QUERY,
          variables: { access: accessToken, refresh: refreshToken },
        },
      })({}, api, extraOptions);

      if (refreshResult?.data) {
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = refreshResult.data.getAccessToken;
        storeTokens(newAccessToken, newRefreshToken);

        result = await fetchBaseQuery({
          baseUrl: apiUrl,
          prepareHeaders: (headers) => {
            headers.set('authorization', `Bearer ${newAccessToken}`);
            return headers;
          },
        })(args, api, extraOptions);
      }
    }
  }

  return result;
};
