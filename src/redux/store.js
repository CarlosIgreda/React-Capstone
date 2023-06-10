import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/coinsSlice';
import metricsReducer from './metrics/metricsSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    metrics: metricsReducer,
  },
});

export default store;
