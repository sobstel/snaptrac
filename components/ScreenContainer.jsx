import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenContainer({ children }) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      {children}
    </SafeAreaView>
  );
}
