import { createSlice } from '@reduxjs/toolkit';
import * as Location from 'expo-location';

const initialState = {
  backgroundPending: false,
  backgroundGranted: false,
  foregroundPending: false,
  foregroundGranted: false,
};

export const { actions, reducer } = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setForegroundGranted(state, { payload: foregroundGranted }) {
      return { ...state, foregroundGranted };
    },
  },
});

export const thunks = {
  checkForegroundAsync: () => async (dispatch) => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    dispatch(actions.setForegroundGranted(granted));
  },
};

export const selectors = {
  foregroundGranted: (state) => state.permission.foregroundGranted,
};
