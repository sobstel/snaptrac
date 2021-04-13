import React from 'react';
import tw from 'tailwind-rn';
import { Card, Text } from '@ui-kitten/components';

export default function Tile({ children }) {
  return (
    <Card appearance="filled" disabled style={tw('w-full my-2')}>
      {children}
    </Card>
  );
}
