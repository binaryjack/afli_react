import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/slice';
import { apiSlice } from '../features/data/data-api-slice';
import versionReducer from '../features/version/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    version: versionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
