import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import tw from 'tailwind-rn';
import { Button, ButtonGroup, Icon, Spinner } from '@ui-kitten/components';
import { selectors as positionLogSelectors, thunks as positionLogThunks } from 'store/positionLog';

const CheckIcon = (props) => <Icon {...props} name="navigation-2" />;
const TrackIcon = (props) => <Icon {...props} name="radio" />;

export default function ActionPanel() {
  const dispatch = useDispatch();
  const positionPending = useSelector(positionLogSelectors.pending);

  const checkLocation = () => {
    if (!positionPending) {
      dispatch(positionLogThunks.requestCurrentPositionAsync());
    }
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
