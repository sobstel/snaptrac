import * as React from 'react';
import { View } from 'react-native';
import Screen from 'components/Screen';
import tw from 'tailwind-rn';
import NetworkStatusTile from './NetworkStatusTile';
import BatteryStatusTile from './BatteryStatusTile';
import LocationTile from './LocationTile';
import MapTile from './MapTile';

export default function MeScreen() {
  return (
    <Screen>
      <View style={tw('flex flex-row')}>
        <NetworkStatusTile />
        <BatteryStatusTile />
      </View>
      <LocationTile />
      <MapTile />
    </Screen>
  );
}
