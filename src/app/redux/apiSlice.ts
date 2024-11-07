import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BOX_HISTORY_ADMIN_QUERY } from '@/graphql/queries';

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = 'https://vineoback-gh-qa.caprover2.innogenio.com/graphql';

// GraphQL queries and mutations
const LOGIN_MUTATION = `
 query userLogin($payload: UserLoginDto!) {
  userLogin(payload: $payload) {
    accessToken
    refreshToken
  }
}
`;

const BOX_HISTORY_QUERY = `
  query BoxHistory($payload: BoxHistoryDto!) {
    getBoxHistory(payload: $payload) {
      box_count
      boxes {
        box_id
        date
        count
        is_pending
        type
        wines {
          wine_id
          wine_name
          image
          pair_with
          philosophy
          about
          rating
          is_reviewed
          score
          area
          store
          likeness
        }
      }
    }
  }
`;

/*const GET_SUBSCRIPTION_STATUS_MUTATION = `
  mutation getSubscriptionStatus {
    getSubscriptionStatus {
      status
    }
  }
`;*/
const GET_SUBSCRIPTION_STATUS_MUTATION = `
  mutation getSubscriptionStatus {
    getSubscriptionStatus {
      status
      subscription_id
      type
      start_date
      end_date
      credit_balance
      number_of_boxes
      is_recommended_polling
    }
  }
`;

const REFRESH_TOKEN_QUERY = `
  query getAccessTokenFromRefresh($access: String!, $refresh: String!) {
    getAccessToken(accessToken: $access, refreshToken: $refresh) {
      accessToken
      refreshToken
    }
  }
`;
const GET_BOX_WINE_PRINT_CARD_QUERY = `
  query getBoxWinePrintCard($box: String!) {
    getBoxWinePrintCard(box: $box)
  }
`;

const LOAD_SUBSCRIPTION_LIST_QUERY = `
  query loadSubscriptionListForUser($type: [Float!]!) {
    loadSubscriptionListForUser(type: $type) {
      _id
      title
      sub_title
      amount
      description
      is_early_adaptor
      display_order
      payment_link
      product_id
      duration
      type
      status
      is_current
    }
  }
`;


// Function to handle token refresh
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  })(args, api, extraOptions);

  console.log('Status code:', result?.data?.errors?.[0]?.extensions?.response?.statusCode); // Added log to check status code

  // If access token expired (401 Unauthorized), try to refresh it
  if (result?.data?.errors?.[0]?.extensions?.response?.statusCode === 401) {
    console.log('401 Unauthorized access detected.');

    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('accessToken');
    console.log('Tokens:', refreshToken, accessToken); // Log tokens for debugging

    if (refreshToken && accessToken) {
      console.log('Attempting token refresh...');

      // Refresh the token
      const refreshResult = await fetchBaseQuery({
        baseUrl: apiUrl,
        method: 'POST',
        body: {
          query: REFRESH_TOKEN_QUERY,
          variables: { access: accessToken, refresh: refreshToken },
        },
      })({}, api, extraOptions); // Empty `args` for refresh query as it’s a separate request

      console.log('Refresh result:', refreshResult.data.data);
      if (refreshResult?.data) {
        const newAccessToken = refreshResult.data.data.getAccessToken.accessToken;
        const newRefreshToken = refreshResult.data.data.getAccessToken.refreshToken;

        // Store new tokens in local storage
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        console.log('Token refreshed. Retrying original request...');
        
        // Retry the original query with new token
        result = await fetchBaseQuery({
          baseUrl: apiUrl,
          prepareHeaders: (headers) => {
            headers.set('authorization', `Bearer ${newAccessToken}`);
            return headers;
          },
        })(args, api, extraOptions);
      } else {
        console.error('Failed to refresh token.');
      }
    } else {
      console.error('No refresh token available. Cannot refresh access token.');
    }
  }

  return result;
};

// Define the API with endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: LOGIN_MUTATION,
          variables: { payload: { email, password } },
        },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const userLogin = data?.userLogin;
          if (userLogin) {
            const { accessToken, refreshToken } = userLogin;
            if (accessToken && refreshToken) {
              localStorage.setItem('accessToken', accessToken);
              localStorage.setItem('refreshToken', refreshToken);
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
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Box History:', data);
        } catch (error) {
          console.error('Error fetching box history:', error);
        }
      },
    }),

    /*getSubscriptionStatus: builder.mutation({
      query: () => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: GET_SUBSCRIPTION_STATUS_MUTATION,
        },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error('Error fetching subscription status:', error);
        }
      },
    }),*/

    getSubscriptionStatus: builder.mutation({
      query: () => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: GET_SUBSCRIPTION_STATUS_MUTATION,
        },
      }),
      transformResponse: (response) => response.data.getSubscriptionStatus,
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Subscription Status:', data);
        } catch (error) {
          console.error('Error fetching subscription status:', error);
        }
      },
    }),


    getBoxHistoryAdmin: builder.query({
      query: ({ searchString, page, pageSize }) => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: `
            query getBoxHistoryAdmin($searchString: String!, $page: Float!, $pageSize: Float!) {
              getBoxHistoryAdmin(searchString: $searchString, page: $page, pageSize: $pageSize) {
                total
                boxes {
                  _id
                  user {
                    _id
                    email
                    name
                    phone
                    house
                    city
                    country
                    zipcode
                  }
                  created_at
                  delivery_date
                  status
                  box_type
                  box_wines {
                    _id
                    name
                    box_count
                  }
                }
              }
            }
          `,
          variables: { searchString: searchString || '', page: page || 1, pageSize: pageSize || 10 },
        },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Admin Box History:', data);
        } catch (error) {
          console.error('Error fetching admin box history:', error);
        }
      },
    }),
    getBoxWinePrintCard: builder.query({
      query: (boxId: string) => ({
        url: '/graphql',
        method: 'POST',
        body: {
          query: `
            query getBoxWinePrintCard($box: String!) {
              getBoxWinePrintCard(box: $box)
            }
          `,
          variables: { box: String(boxId) }, // Convert boxId to string here
          operationName: 'getBoxWinePrintCard',
        },
      }),
      transformResponse: (response) => response.data.getBoxWinePrintCard,
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
    
    
  }),
});

export const {
  useLoginMutation,
  useGetBoxHistoryQuery,
  useGetSubscriptionStatusMutation,
  useGetBoxHistoryAdminQuery,
  useGetBoxWinePrintCardQuery,
  useLoadSubscriptionListForUserQuery,
} = authApi;
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// // import { BOX_HISTORY_ADMIN_QUERY } from '@/graphql/queries';

// // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const apiUrl = 'https://vineoback-gh-qa.caprover2.innogenio.com/graphql';

// // GraphQL mutations and queries
// const LOGIN_MUTATION = `
//   mutation userLogin($payload: UserLoginDto!) {
//     userLogin(payload: $payload) {
//       accessToken
//       refreshToken
//     }
//   }
// `;

// const BOX_HISTORY_QUERY = `
//   query BoxHistory($payload: BoxHistoryDto!) {
//     getBoxHistory(payload: $payload) {
//       box_count
//       boxes {
//         box_id
//         date
//         count
//         is_pending
//         type
//         wines {
//           wine_id
//           wine_name
//           image
//           pair_with
//           philosophy
//           about
//           rating
//           is_reviewed
//           score
//           area
//           store
//           likeness
//         }
//       }
//     }
//   }
// `;

// const GET_SUBSCRIPTION_STATUS_MUTATION = `
//   mutation getSubscriptionStatus {
//     getSubscriptionStatus {
//       status
//     }
//   }
// `;

// const REFRESH_TOKEN_QUERY = `
//   query getAccessTokenFromRefresh($access: String!, $refresh: String!) {
//     getAccessToken(accessToken: $access, refreshToken: $refresh) {
//       accessToken
//       refreshToken
//     }
//   }
// `;

// const GET_BOX_WINE_PRINT_CARD_QUERY = `
//   query getBoxWinePrintCard($box: String!) {
//     getBoxWinePrintCard(box: $box)
//   }
// `;

// // Function to handle token refresh
// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await fetchBaseQuery({
//     baseUrl: apiUrl,
//     prepareHeaders: (headers) => {
//       const accessToken = localStorage.getItem('accessToken');
//       if (accessToken) {
//         headers.set('authorization', `Bearer ${accessToken}`);
//       }
//       return headers;
//     },
//   })(args, api, extraOptions);

//   console.log('Status code:', result?.data?.errors?.[0]?.extensions?.response?.statusCode); // Added log to check status code

//   // If access token expired (401 Unauthorized), try to refresh it
//   if (result?.data?.errors?.[0]?.extensions?.response?.statusCode === 401) {
//     console.log('401 Unauthorized access detected.');

//     const refreshToken = localStorage.getItem('refreshToken');
//     const accessToken = localStorage.getItem('accessToken');
//     console.log('Tokens:', refreshToken, accessToken); // Log tokens for debugging

//     if (refreshToken && accessToken) {
//       console.log('Attempting token refresh...');

//       // Refresh the token
//       const refreshResult = await fetchBaseQuery({
//         baseUrl: apiUrl,
//         method: 'POST',
//         body: {
//           query: REFRESH_TOKEN_QUERY,
//           variables: { access: accessToken, refresh: refreshToken },
//         },
//       })({}, api, extraOptions); // Empty `args` for refresh query as it’s a separate request

//       if (refreshResult?.data) {
//         const newAccessToken = refreshResult.data.getAccessToken.accessToken;
//         const newRefreshToken = refreshResult.data.getAccessToken.refreshToken;

//         // Store new tokens in local storage
//         localStorage.setItem('accessToken', newAccessToken);
//         localStorage.setItem('refreshToken', newRefreshToken);

//         console.log('Token refreshed. Retrying original request...');

//         // Retry the original query with new token
//         result = await fetchBaseQuery({
//           baseUrl: apiUrl,
//           prepareHeaders: (headers) => {
//             headers.set('authorization', `Bearer ${newAccessToken}`);
//             return headers;
//           },
//         })(args, api, extraOptions);
//       } else {
//         console.error('Failed to refresh token.');
//       }
//     } else {
//       console.error('No refresh token available. Cannot refresh access token.');
//     }
//   }

//   return result;
// };

// // Define the API with endpoints
// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: baseQueryWithReauth,
//   endpoints: builder => ({
//     login: builder.mutation({
//       query: ({ email, password }) => ({
//         url: '/graphql',
//         method: 'POST',
//         body: {
//           query: LOGIN_MUTATION,
//           variables: { payload: { email, password } },
//         },
//       }),
//       async onQueryStarted(arg, { queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           const userLogin = data?.userLogin;
//           if (userLogin) {
//             const { accessToken, refreshToken } = userLogin;
//             if (accessToken && refreshToken) {
//               localStorage.setItem('accessToken', accessToken);
//               localStorage.setItem('refreshToken', refreshToken);
//             }
//           }
//         } catch (error) {
//           console.error('Login error:', error);
//         }
//       },
//     }),

//     getBoxHistory: builder.query({
//       query: ({ page, limit }) => ({
//         url: '/graphql',
//         method: 'POST',
//         body: {
//           query: BOX_HISTORY_QUERY,
//           variables: { payload: { page, limit } },
//         },
//       }),
//       async onQueryStarted(arg, { queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           console.log('Box History:', data);
//         } catch (error) {
//           console.error('Error fetching box history:', error);
//         }
//       },
//     }),

//     getSubscriptionStatus: builder.mutation({
//       query: () => ({
//         url: '/graphql',
//         method: 'POST',
//         body: {
//           query: GET_SUBSCRIPTION_STATUS_MUTATION,
//         },
//       }),
//       async onQueryStarted(arg, { queryFulfilled }) {
//         try {
//           await queryFulfilled;
//         } catch (error) {
//           console.error('Error fetching subscription status:', error);
//         }
//       },
//     }),

//     getBoxHistoryAdmin: builder.query({
//       query: ({ searchString, page, pageSize }) => ({
//         url: '/graphql',
//         method: 'POST',
//         body: {
//           query: `
//             query getBoxHistoryAdmin($searchString: String!, $page: Float!, $pageSize: Float!) {
//               getBoxHistoryAdmin(searchString: $searchString, page: $page, pageSize: $pageSize) {
//                 total
//                 boxes {
//                   _id
//                   user {
//                     _id
//                     email
//                     name
//                     phone
//                     house
//                     city
//                     country
//                     zipcode
//                   }
//                   created_at
//                   delivery_date
//                   status
//                   box_type
//                   box_wines {
//                     _id
//                     name
//                     box_count
//                   }
//                 }
//               }
//             }
//           `,
//           variables: { searchString: searchString || '', page: page || 1, pageSize: pageSize || 10 },
//         },
//       }),
//       async onQueryStarted(arg, { queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           console.log('Admin Box History:', data);
//         } catch (error) {
//           console.error('Error fetching admin box history:', error);
//         }
//       },
//     }),

//     // New endpoint for getting box wine print card
//     getBoxWinePrintCard: builder.query({
//       query: boxId => ({
//         url: '/graphql',
//         method: 'POST',
//         body: {
//           query: GET_BOX_WINE_PRINT_CARD_QUERY,
//           variables: { box: boxId },
//         },
//       }),
//     }),
//   }),
// });

// // Export hooks for usage in functional components
// export const {
//   useLoginMutation,
//   useGetBoxHistoryQuery,
//   useGetSubscriptionStatusMutation,
//   useGetBoxHistoryAdminQuery,
//   useGetBoxWinePrintCardQuery, // Exporting the new hook
// } = authApi;

// export default authApi.reducer;
