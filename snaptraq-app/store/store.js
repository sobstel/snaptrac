import { configureStore } from '@reduxjs/toolkit';
import { reducer as locationReducer } from './location';

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});

export default store;
