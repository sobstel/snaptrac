import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import tw from 'tailwind-rn';
import { Text } from '@ui-kitten/components';
import Tile from './Tile';

export default function LocationTile() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permStatus, setPermStatus] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        status,
        granted,
      } = await Location.requestForegroundPermissionsAsync();
      setPermStatus(status);
      if (!granted) {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const currentPosition = await Location.getCurrentPositionAsync({});
      setLocation(currentPosition);
    })();
  }, []);

  if (errorMsg) {
    return (
      <Tile>
        <Text>ERROR: {errorMsg}</Text>
      </Tile>
    );
  }

  return (
    <Tile>
      <View style={tw('flex')}>
        <Text>Location: {JSON.stringify(location)}</Text>
        <Text>Permissions: {JSON.stringify(permStatus)}</Text>
      </View>
    </Tile>
  );
}
