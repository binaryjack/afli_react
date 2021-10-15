// Ducks Psttern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface VersionState {
  value: number;
}

const initialState: VersionState = {
  value: 0,
};
// uses immer that's avoid to mutate.  do not need to copy state and write a new one.
const versionSlice = createSlice({
  name: 'version',
  initialState,
  reducers: {
    // increment
    incremented: (state) => {
      // immer makes it immutability works under the hood
      state.value++;
    },
    decremented: (state) => {
      // immer makes it immutability works under the hood
      state.value--;
    },
  },
});

export const { incremented, decremented } = versionSlice.actions;

export default versionSlice.reducer;
