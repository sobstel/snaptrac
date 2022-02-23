import { View } from 'react-native';
import React from 'react';
// import * as Location from 'expo-location';
import tw from 'tailwind-rn';
import { Text } from '@ui-kitten/components';
import Tile from './Tile';
import useLocation from '../../hooks/useLocation';

// const LoadingIndicator = props => (
//   <View style={tw('justify-center items-center')}>
//     <Spinner size="small" />
//   </View>
// );

export default function LocationTile() {
  const { granted, currentLocation } = useLocation();

  if (granted === false) {
    return (
      <Tile>
        <Text>ERROR: Permission to access location was denied</Text>
      </Tile>
    );
  }

  return (
    <Tile>
      <View style={tw('flex flex-col justify-between')}>
        {currentLocation && <Text>{JSON.stringify(currentLocation)}</Text>}
      </View>
    </Tile>
  );
}
