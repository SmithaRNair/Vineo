// src/store.ts

import { configureStore } from '@reduxjs/toolkit';
// Adjust the path to where your apiSlice.ts is located
import { authApi } from '@sign-in/apiSlice';

const store = configureStore({
  reducer: {
    // Add the authApi reducer to the store

    [authApi.reducerPath]: authApi.reducer,
  },
  // Add the api middleware, which enables caching, invalidation, polling, etc.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

// Optionally, add types for TypeScript users
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
