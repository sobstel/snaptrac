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

export default function LocationTiles() {
  const { granted, currentLocation } = useLocation();

  const {
    // accuracy,
    altitude,
    altitudeAccuracy,
    heading,
    // latitude,
    // longitude,
    speed,
  } = currentLocation ? currentLocation.coords : {};

  console.log({ granted, currentLocation });

  // TODO: accuracy as a circle

  return (
    <>
      <Tile label="Alt (m)">
        <Text>
          {altitude ? Math.round(altitude) : '?'}{' '}
          {altitudeAccuracy ? `(± ${Math.round(altitudeAccuracy)})` : '?'}
        </Text>
      </Tile>
      <Tile label="km/h">
        <Text>{speed || '?'}</Text>
      </Tile>
      <Tile label="(head)">
        <Text>{heading || '?'}</Text>
      </Tile>
    </>
  );
}
