import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-rn';
import { selectors as positionLogSelectors } from 'store/positionLog';

// todo: it's not tile
export default function MapPanel() {
  const activePosition = useSelector(positionLogSelectors.activePosition);
  const { latitude, longitude } = activePosition?.coords || {};

  if (!latitude || !longitude) {
    return null;
  }

  return (
    <View style={tw('flex-grow w-full')}>
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
        // showsPointsOfInterest
        showsScale
        zoomEnabled
        zoomTapEnabled
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
}
