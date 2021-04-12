import * as React from 'react';
import tw from 'tailwind-rn';
import { Card, Text } from '@ui-kitten/components';
import Screen from 'components/Screen';

export default function MeScreen() {
  return (
    <Screen>
      <Card appearance="filled">
        <Text>
          The Maldives, officially the Republic of Maldives, is a small country
          in South Asia, located in the Arabian Sea of the Indian Ocean. It lies
          southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from
          the Asian continent
        </Text>
      </Card>
      <Card appearance="filled" style={tw('mt-4')}>
        <Text>
          The Maldives, officially the Republic of Maldives, is a small country
          in South Asia, located in the Arabian Sea of the Indian Ocean. It lies
          southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from
          the Asian continent
        </Text>
      </Card>
    </Screen>
  );
}
