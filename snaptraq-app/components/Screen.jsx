import useBackgroundColor from 'hooks/useBackgroundColor';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, Layout } from '@ui-kitten/components';

export default function Screen({ children, topNavigation = null }) {
  const backgroundColor = useBackgroundColor(topNavigation ? 1 : 2);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor,
      }}
      edges={['top']}
    >
      {topNavigation && (
        <>
          {topNavigation}
          <Divider />
        </>
      )}
      <Layout
        level="1"
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        {children}
      </Layout>
    </SafeAreaView>
  );
}
