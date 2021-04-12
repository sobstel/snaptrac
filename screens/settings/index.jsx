import * as React from 'react';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import ScreenContainer from 'components/ScreenContainer';

export default function SettingsScreen() {
  return (
    <ScreenContainer>
      <TopNavigation title="Settings" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text>Settings Screen</Text>
      </Layout>
    </ScreenContainer>
  );
}
