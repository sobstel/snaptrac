import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import tw from 'tailwind-rn';
import { selectors as positionLogSelectors } from 'store/positionLog';
import { selectors as permissionsSelectors } from 'store/permission';

export default function LocationPanel() {
  return null;

  const activeLocation = useSelector(positionLogSelectors.activePosition);
  const foregroundGranted = useSelector(permissionsSelectors.foregroundGranted);

  return (
    <Card
      appearance="filled"
      disabled
      style={tw('mx-2 my-2 items-center content-center justify-center')}
    >
      <View style={tw('items-center')}>
        <Text>Granted: {foregroundGranted ? 'yes' : 'no'}</Text>
        <Text>{JSON.stringify(activeLocation)}</Text>
      </View>
    </Card>
  );
}
