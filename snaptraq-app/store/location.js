import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as Location from 'expo-location';

const initialState = {
  backgroundPermissionsGranted: false,
  currentLocation: null,
  // TODO: pending check state
  foregroundPermissionsGranted: false,
};

export const location = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setForegroundPermissionsGranted(state, action) {
      state.foregroundPermissionsGranted = action.payload;
    },
  },
});

export const { actions, reducer } = location;

export const thunks = {
  checkForegroundPermissionsAsync: createAsyncThunk(
    'location/checkForegroundPermissionsAsync',
    async (args, { dispatch }) => {
      const { granted } = await Location.getForegroundPermissionsAsync();
      dispatch(actions.setForegroundPermissionsGranted(granted));
    },
  ),
  requestCurrentLocationAsync: createAsyncThunk(
    'location/requestCurrentLocationAsync',
    async (args, { dispatch }) => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      dispatch(actions.setForegroundPermissionsGranted(granted));

      if (granted) {
        const currentLocation = await Location.getCurrentPositionAsync({});
        dispatch(actions.setCurrentLocation(currentLocation));
      }
    },
  ),
};

export const selectors = {};
