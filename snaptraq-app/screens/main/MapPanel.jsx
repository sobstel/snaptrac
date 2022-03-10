import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-rn';

// todo: it's not tile
export default function MapPanel() {
  const currentLocation = useSelector(state => state.location.currentLocation);
  const { latitude, longitude } =
    (currentLocation && currentLocation.coords) || {};

  console.log({ currentLocation, latitude, longitude });

  return (
    <View style={tw('flex-grow w-full')}>
      <MapView
        mapType="hybrid"
        region={{
          latitude: latitude || 50.2649,
          longitude: longitude || 19.0238,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
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
