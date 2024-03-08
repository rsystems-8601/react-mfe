import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  funda: ''
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
    morganValue: (state, action) => {
        state.funda = action.payload;
      },
  },
});

export const { updateValue, morganValue } = appSlice.actions;
export default appSlice.reducer;
