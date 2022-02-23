import React from 'react';
import { View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import tw from 'tailwind-rn';
import { Icon, Text, useTheme } from '@ui-kitten/components';
import Tile from './Tile';

export default function NetworkStatusTile() {
  const netInfo = useNetInfo();
  const theme = useTheme();

  if (!netInfo) {
    return (
      <Tile>
        <Text>Unknown network state</Text>
      </Tile>
    );
  }

  return (
    <Tile>
      <View style={tw('flex flex-row items-center')}>
        <Icon
          name={
            netInfo.isInternetReachable ? 'wifi-outline' : 'wifi-off-outline'
          }
          width={24}
          height={24}
          fill={theme['color-primary-400']}
          backgroundColor="transparent"
          animation="pulse"
        />
        <Text style={tw('ml-2')}>{netInfo.type.toUpperCase()}</Text>
      </View>
    </Tile>
  );
}
