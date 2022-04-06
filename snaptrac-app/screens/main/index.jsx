import * as React from 'react';
import { Text } from 'react-native';

import MapPanel from './MapPanel';

import Screen from '~/components/Screen';

export default function MainScreen() {
  return (
    <Screen>
      <MapPanel />
    </Screen>
  );
}
