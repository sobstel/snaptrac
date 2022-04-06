import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import View from 'react-native-ui-lib/view';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectors as positionLogSelectors,
  thunks as positionLogThunks,
} from '~/store/positionLog';

export default function MapPanel() {
  const dispatch = useDispatch();

  const activePosition = useSelector(positionLogSelectors.activePosition);
  const { latitude, longitude } = activePosition?.coords || {};

  useEffect(() => {
    dispatch(positionLogThunks.requestCurrentPositionAsync());
  }, []);

  if (!latitude || !longitude) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        mapType="hybrid"
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.032,
          longitudeDelta: 0.032,
        }}
        scrollEnabled
        style={{ ...StyleSheet.absoluteFillObject }}
        showsBuildings={false}
        showsCompass
        showsScale
        zoomEnabled
        zoomTapEnabled
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
}
