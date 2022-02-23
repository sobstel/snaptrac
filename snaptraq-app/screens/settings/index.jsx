import * as React from 'react';
import { Layout, Text, TopNavigation } from '@ui-kitten/components';
import Screen from 'components/Screen';

export default function SettingsScreen() {
  return (
    <Screen
      topNavigation={<TopNavigation title="Settings" alignment="center" />}
    >
      <Text>Settings Screen</Text>
    </Screen>
  );
}
