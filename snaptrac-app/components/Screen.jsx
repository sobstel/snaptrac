import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import tw from 'tailwind-rn';

export default function Screen({ children }) {
  return <>{children}</>;
  return <SafeAreaView edges={['top']}>{children}</SafeAreaView>;
}
