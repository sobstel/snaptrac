import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen({ children }) {
  return <SafeAreaView edges={['top']}>{children}</SafeAreaView>;
}
