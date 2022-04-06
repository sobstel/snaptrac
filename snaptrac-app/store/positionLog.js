import _ from 'lodash';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import * as Location from 'expo-location';
import { actions as permissionActions } from './permission';

const initialState = {
  activePositionId: null,
  pending: false,
  positions: [],
};

export const { actions, reducer } = createSlice({
  name: 'positionLog',
  initialState,
  reducers: {
    addPosition: (state, { payload: positionDraft }) => {
      const positions = [...state.positions];
      const id = nanoid();

      const latestPosition = positions.shift();
      if (latestPosition) {
        positions.unshift({
          ...latestPosition,
          nextId: id,
        });
      }

      positions.unshift({
        ...positionDraft,
        id,
        ...(latestPosition && { prevId: latestPosition.id }),
        trackId: null,
        shareable: false, // TODO: ?
        shared: false, // TODO: ?
      });

      return { ...state, positions, activePositionId: id };
    },
    setPending: (state, { payload: pendingDraft }) => ({
      ...state,
      pending: Boolean(pendingDraft),
    }),
  },
});

export const thunks = {
  requestCurrentPositionAsync: () => async (dispatch) => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    dispatch(permissionActions.setForegroundGranted(granted));

    // TODO: (?) try last known position first
    // TODO: dispatch error if not granted

    if (granted) {
      dispatch(actions.setPending(true));
      const positionDraft = await Location.getCurrentPositionAsync({});
      dispatch(actions.addPosition(positionDraft));
      dispatch(actions.setPending(false));
    }
  },
};

export const selectors = {
  activePosition: (state) =>
    selectors
      .positions(state)
      .find((position) => position.id === state.positionLog.activePositionId),
  pending: (state) => state.positionLog.pending,
  positions: (state) => state.positionLog.positions,
};
