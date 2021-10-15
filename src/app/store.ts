import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/slice';
import versionReducer from '../features/version/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    version: versionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
