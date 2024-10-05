// src/auth/center/apiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

const LOGIN_MUTATION = gql`
  mutation userLogin($payload: UserLoginDto!) {
    userLogin(payload: $payload) {
      accessToken
      refreshToken
    }
  }
`;
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vineoback-gh-qa.caprover2.innogenio.com',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: payload => ({
        url: '/graphql', // Assuming '/graphql' is the GraphQL endpoint path
        method: 'POST',
        body: {
          query: LOGIN_MUTATION,
          variables: { payload }, // GraphQL expects variables to be passed this way
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
