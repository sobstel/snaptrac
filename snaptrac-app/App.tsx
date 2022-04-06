import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

import MainScreen from '~/screens/main';
import store from '~/store';
import { thunks as permissionThunks } from '~/store/permission';

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(permissionThunks.checkForegroundAsync());
  }, [dispatch]);

  return <MainScreen />;
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <AppContent />
    </Provider>
  );
}
