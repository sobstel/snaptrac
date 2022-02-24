import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import tw from 'tailwind-rn';

// todo: it's not tile
export default function MapPanel() {
  return (
    <View style={tw('flex-grow w-full my-2')}>
      <MapView
        initialRegion={{
          latitude: 50.2649,
          longitude: 19.0238,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        mapType="hybrid"
        scrollEnabled
        style={{ ...StyleSheet.absoluteFillObject }}
        showsBuildings={false}
        showsCompass
        // showsPointsOfInterest
        showsScale
        zoomEnabled
        zoomTapEnabled
      />
    </View>
  );
}
