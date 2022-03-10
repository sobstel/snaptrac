import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@ui-kitten/components';
import Tile from './Tile';

export default function LocationPanel() {
  const currentLocation = useSelector(state => state.location.currentLocation);
  const foregroundPermissionsGranted = useSelector(
    state => state.location.foregroundPermissionsGranted,
  );

  return (
    <Tile label="Current location">
      <Text>Granted: {foregroundPermissionsGranted ? 'yes' : 'no'}</Text>
      <Text>{JSON.stringify(currentLocation)}</Text>
    </Tile>
  );
}
