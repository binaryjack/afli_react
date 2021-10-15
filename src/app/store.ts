import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/slice';

export const store = configureStore({
  reducer: { counter: counterReducer },
});

export type appDipatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;
