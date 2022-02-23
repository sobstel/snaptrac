import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import tw from 'tailwind-rn';
import { Button, Spinner, Text } from '@ui-kitten/components';
import Tile from './Tile';

const LoadingIndicator = props => (
  <View style={tw('justify-center items-center')}>
    <Spinner size="small" />
  </View>
);

export default function LocationTile() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permStatus, setPermStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLocationCheck = async () => {
    const {
      status,
      granted,
    } = await Location.requestForegroundPermissionsAsync();

    setPermStatus(status);
    if (!granted) {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    setLoading(true);
    const currentPosition = await Location.getCurrentPositionAsync({});
    setLocation(currentPosition);
    setLoading(false);
  };

  if (errorMsg) {
    return (
      <Tile>
        <Text>ERROR: {errorMsg}</Text>
      </Tile>
    );
  }

  return (
    <Tile>
      <View style={tw('flex flex-col justify-between')}>
        <Button
          onPress={handleLocationCheck}
          accessoryLeft={loading ? LoadingIndicator : null}
          disabled={loading}
        >
          CHECK
        </Button>
        {!loading && permStatus && (
          <Text>Permissions: {JSON.stringify(permStatus)}</Text>
        )}
        {!loading && location && (
          <Text>Location: {JSON.stringify(location)}</Text>
        )}
      </View>
    </Tile>
  );
}
