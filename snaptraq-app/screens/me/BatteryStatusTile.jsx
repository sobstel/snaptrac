import React from 'react';
import { View } from 'react-native';
import { useBatteryLevel, useBatteryLowPowerMode } from '@use-expo/battery';
import tw from 'tailwind-rn';
import { Icon, Text, useTheme } from '@ui-kitten/components';
import Tile from './Tile';

export default function BatteryStatusTile() {
  const [batteryLevel] = useBatteryLevel();
  const [isLowPowerMode] = useBatteryLowPowerMode();
  const theme = useTheme();

  if (!batteryLevel) {
    return (
      <Tile>
        <Text>Unknown battery level</Text>
      </Tile>
    );
  }

  return (
    <Tile>
      <View style={tw('flex flex-row items-center')}>
        <Icon
          name="battery"
          width={24}
          height={24}
          fill={theme['color-primary-400']}
          backgroundColor="transparent"
          animation="pulse"
        />

        <Text style={tw('ml-2')}>
          {Math.floor(batteryLevel * 100)}% {isLowPowerMode && '(low)'}
        </Text>
      </View>
    </Tile>
  );
}
