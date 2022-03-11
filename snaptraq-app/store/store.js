import { configureStore } from '@reduxjs/toolkit';
import { reducer as permissionReducer } from './permission';
import { reducer as positionLogReducer } from './positionLog';

const store = configureStore({
  reducer: {
    permission: permissionReducer,
    positionLog: positionLogReducer,
  },
});

export default store;
