// src/services/authApi.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery';
import { LOGIN_MUTATION, BOX_HISTORY_QUERY, GET_SUBSCRIPTION_STATUS_MUTATION, GET_BOX_WINE_PRINT_CARD_QUERY, LOAD_SUBSCRIPTION_LIST_QUERY, LATEST_GIFTS_QUERY } from '../graphql/queries';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: LOGIN_MUTATION,
          variables: { payload: { email, password } },
        },
      }),
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          const userLogin = data?.userLogin;
          if (userLogin) {
            const { accessToken, refreshToken } = userLogin;
            if (accessToken && refreshToken) {
              storeTokens(accessToken, refreshToken);
            }
          }
        } catch (error) {
          console.error('Login error:', error);
        }
      },
    }),

    getBoxHistory: builder.query({
      query: ({ page, limit }) => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: BOX_HISTORY_QUERY,
          variables: { payload: { page, limit } },
        },
      }),
    }),

    getSubscriptionStatus: builder.mutation({
      query: () => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: GET_SUBSCRIPTION_STATUS_MUTATION,
        },
      }),
      transformResponse: (response) => response.data.getSubscriptionStatus,
    }),

    getBoxWinePrintCard: builder.query({
      query: (boxId: string) => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: GET_BOX_WINE_PRINT_CARD_QUERY,
          variables: { box: boxId },
        },
      }),
    }),

    loadSubscriptionListForUser: builder.query({
      query: (type) => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: LOAD_SUBSCRIPTION_LIST_QUERY,
          variables: { type },
        },
      }),
      transformResponse: (response) => response.data.loadSubscriptionListForUser,
    }),

    getLatestUserGift: builder.query({
      query: () => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: LATEST_GIFTS_QUERY,
        },
      }),
      transformResponse: (response) => response.data.getLatestUserGift,
    }),
  }),
});

export const {
  useLoginMutation,
  useGetBoxHistoryQuery,
  useGetSubscriptionStatusMutation,
  useGetBoxWinePrintCardQuery,
  useLoadSubscriptionListForUserQuery,
  useGetLatestUserGiftQuery,
} = authApi;
