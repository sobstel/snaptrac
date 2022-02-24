import * as React from 'react';
import { View } from 'react-native';
import Screen from 'components/Screen';
import tw from 'tailwind-rn';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import useActionColor from '../../hooks/useActionColor';
import CorePanel from './CorePanel';
import MapPanel from './MapPanel';

const ActionIcon = props => {
  const actionColor = useActionColor();
  return <Icon {...props} fill={actionColor} />;
};

const SettingsIcon = props => (
  <ActionIcon {...props} name="settings-2-outline" />
);
const ShareIcon = props => <ActionIcon {...props} name="share-outline" />;

const Header = () => (
  <TopNavigation
    accessoryRight={
      <>
        <TopNavigationAction icon={ShareIcon} />
        <TopNavigationAction icon={SettingsIcon} />
      </>
    }
  />
);

export default function MainScreen() {
  return (
    <Screen topNavigation={<Header />}>
      <CorePanel />
      <MapPanel />
    </Screen>
  );
}
