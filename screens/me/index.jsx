import * as React from 'react';
import tw from 'tailwind-rn';
import { Card, Divider, Layout, Text } from '@ui-kitten/components';
import ScreenContainer from 'components/ScreenContainer';

export default function MeScreen() {
  return (
    <ScreenContainer>
      <Layout
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}
      >
        <Card>
          <Text>
            The Maldives, officially the Republic of Maldives, is a small
            country in South Asia, located in the Arabian Sea of the Indian
            Ocean. It lies southwest of Sri Lanka and India, about 1,000
            kilometres (620 mi) from the Asian continent
          </Text>
          <Divider style={tw('my-4')} />
          <Text>
            The Maldives, officially the Republic of Maldives, is a small
            country in South Asia, located in the Arabian Sea of the Indian
            Ocean. It lies southwest of Sri Lanka and India, about 1,000
            kilometres (620 mi) from the Asian continent
          </Text>
        </Card>
      </Layout>
    </ScreenContainer>
  );
}
