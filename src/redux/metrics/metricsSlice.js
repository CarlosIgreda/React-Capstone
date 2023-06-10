import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: null,
};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    asset: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { asset } = metricsSlice.actions;

export default metricsSlice.reducer;
