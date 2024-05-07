import bitrateSliderReducer from './bitrateSliderSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    bitrate: bitrateSliderReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
