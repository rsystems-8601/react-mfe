import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    // Add other reducers here
  },
});

export default store;
