import { configureStore } from '@reduxjs/toolkit';
import applicationSettingsReducer from '../features/appsettings/slice';
import counterReducer from '../features/counter/slice';
import { personSlice } from '../features/person/person-api-slice';
import versionReducer from '../features/version/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    version: versionReducer,
    appplicationSettings: applicationSettingsReducer,
    [personSlice.reducerPath]: personSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(personSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
