// src/auth/center/apiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Use a plain string for the mutation
const LOGIN_MUTATION = `
 query userLogin($payload: UserLoginDto!) {
              userLogin(payload: $payload) {
                accessToken
                refreshToken
              }
            }
`;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vineoback-gh-qa.caprover2.innogenio.com', // Ensure this is the correct base URL
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json'); // Set headers for JSON
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      // Send the payload as an object with email and password
      query: ({ email, password }) => ({
        url: '/graphql', // Ensure this is the correct endpoint path
        method: 'POST',
        body: {
          query: LOGIN_MUTATION, // GraphQL mutation string
          variables: {
            payload: {
              email,
              password,
            }, // The payload variable
          },
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
