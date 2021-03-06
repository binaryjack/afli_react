// Ducks Psttern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};
// uses immer that's avoid to mutate.  do not need to copy state and write a new one.
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    incremented: (state) => {
      // immer makes it immutability works under the hood
      state.value++;
    },
    amountAdding: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incremented, amountAdding } = counterSlice.actions;

export default counterSlice.reducer;
