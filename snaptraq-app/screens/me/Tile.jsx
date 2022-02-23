import React from 'react';
import tw from 'tailwind-rn';
import { Card } from '@ui-kitten/components';

export default function Tile({ children }) {
  return (
    <Card appearance="filled" disabled style={tw('mx-2 my-2')}>
      {children}
    </Card>
  );
}
