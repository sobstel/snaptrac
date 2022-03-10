import React from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import tw from 'tailwind-rn';
import { Button, ButtonGroup, Icon } from '@ui-kitten/components';
import { thunks as locationThunks } from '../../store/location';

const CheckIcon = props => <Icon {...props} name="navigation-2" />;
const TrackIcon = props => <Icon {...props} name="radio" />;

export default function ActionPanel() {
  const dispatch = useDispatch();

  const checkLocation = () => {
    dispatch(locationThunks.requestCurrentLocationAsync());
  };

  return (
    <View
      style={{
        ...tw('absolute bottom-10 flex flex-row flex-wrap items-center'),
      }}
    >
      <ButtonGroup size="giant">
        <Button accessoryLeft={CheckIcon} onPress={checkLocation} />
        <Button accessoryLeft={TrackIcon} />
      </ButtonGroup>
    </View>
  );
}
