import React from 'react';
import { View } from 'react-native';
import tw from 'tailwind-rn';
import { Button } from '@ui-kitten/components';
import NetworkStatusTile from './NetworkStatusTile';
import BatteryStatusTile from './BatteryStatusTile';
import LocationTiles from './LocationTiles';

export default function () {
  return (
    <View style={tw('flex flex-row flex-wrap')}>
      <NetworkStatusTile />
      <BatteryStatusTile />
      <LocationTiles />
      <Button>Track me</Button>
    </View>
  );
}
