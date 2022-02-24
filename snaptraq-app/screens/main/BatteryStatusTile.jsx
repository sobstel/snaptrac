import React from 'react';
import { View } from 'react-native';
import { useBatteryLevel } from '@use-expo/battery';
import tw from 'tailwind-rn';
import { Icon, Text, useTheme } from '@ui-kitten/components';
import Tile from './Tile';

export default function BatteryStatusTile() {
  const [batteryLevel] = useBatteryLevel();
  // const [isLowPowerMode] = useBatteryLowPowerMode();

  return (
    <Tile label="Battery">
      <View style={tw('flex flex-row items-center')}>
        <Text>
          {batteryLevel >= 0 ? `${Math.floor(batteryLevel * 100)}%` : 'n/a'}
        </Text>
      </View>
    </Tile>
  );
}
