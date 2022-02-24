import React from 'react';
import { View } from 'react-native';
import tw from 'tailwind-rn';
import { Card, Text } from '@ui-kitten/components';

export default function Tile({ children, label }) {
  return (
    <Card
      appearance="filled"
      disabled
      style={tw('mx-2 my-2 items-center content-center justify-center')}
    >
      <View style={tw('items-center')}>{children}</View>
      <Text category="label" style={tw('items-center')}>
        {label}
      </Text>
    </Card>
  );
}
