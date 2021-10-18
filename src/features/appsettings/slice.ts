// Ducks Pattern

import { createSlice } from '@reduxjs/toolkit';

export interface AppSettingsState {
  debug: boolean;
}

const initialState: AppSettingsState = {
  debug: false,
};
// uses immer that's avoid to mutate.  do not need to copy state and write a new one.
const applicationSettingsSlice = createSlice({
  name: 'version',
  initialState,
  reducers: {
    // increment
    setDebugMode: (state) => {
      // immer makes it immutability works under the hood
      state.debug = !state.debug;
    },

  },
});

export const { setDebugMode } = applicationSettingsSlice.actions;

export default applicationSettingsSlice.reducer;
