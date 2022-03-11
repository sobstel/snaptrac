import * as React from 'react';
import { View } from 'react-native';
import Screen from 'components/Screen';
import tw from 'tailwind-rn';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import useActionColor from 'hooks/useActionColor';
// import CorePanel from './CorePanel';
import ActionPanel from './ActionPanel';
import LocationPanel from './LocationPanel';
import MapPanel from './MapPanel';

const ActionIcon = (props) => {
  const actionColor = useActionColor();
  return <Icon {...props} fill={actionColor} />;
};

const SettingsIcon = (props) => <ActionIcon {...props} name="options-2-outline" />;
const ShareIcon = (props) => <ActionIcon {...props} name="cloud-upload-outline" />;

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
      {/* <CorePanel /> */}
      <LocationPanel />
      <MapPanel />
      <ActionPanel />
    </Screen>
  );
}
