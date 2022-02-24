import React from 'react';
import { View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import tw from 'tailwind-rn';
import { Icon, Text, useTheme } from '@ui-kitten/components';
import Tile from './Tile';

export default function NetworkStatusTile() {
  const { isInternetReachable, type } = useNetInfo();
  const theme = useTheme();

  const value = type ? type.toUpperCase() : 'n/a';

  return (
    <Tile label="Network">
      <Text>{value}</Text>
    </Tile>
  );
}
