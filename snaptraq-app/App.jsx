import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import AppLoading from 'expo-app-loading';
/* eslint-disable camelcase */
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';
/* eslint-enable camelcase */
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import theme from 'theme/theme';
import themeMapping from 'theme/mapping';
import { IconRegistry, ApplicationProvider } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import useBackgroundColor from 'hooks/useBackgroundColor';
import MainScreen from 'screens/main';
import SettingsScreen from 'screens/settings';
import store from 'store';
import { thunks as permissionThunks } from './store/permission';

// const MainStack = createStackNavigator();
// const MainStackScreen = () => (
//   <MainStack.Navigator headerMode="none">
//     <MainStack.Screen name="Main" component={MainScreen} />
//   </MainStack.Navigator>
// );

// const SettintsStack = createStackNavigator();
// const SettingsStackScreen = () => (
//   <SettintsStack.Navigator headerMode="none">
//     <SettintsStack.Screen name="Settings" component={SettingsScreen} />
//   </SettintsStack.Navigator>
// );

// const RadioIcon = props => <Icon {...props} name="radio-outline" />;
// const SettingsIcon = props => <Icon {...props} name="settings-2-outline" />;

// const BottomTabBar = ({ navigation, state }) => {
//   const backgroundColor = useBackgroundColor();
//
//   return (
//     <SafeAreaView edges={['bottom']} mode="padding" style={{ backgroundColor }}>
//       <BottomNavigation
//         appearance="noIndicator"
//         selectedIndex={state.index}
//         onSelect={index => navigation.navigate(state.routeNames[index])}
//       >
//         <BottomNavigationTab icon={RadioIcon} />
//         <BottomNavigationTab icon={SettingsIcon} />
//       </BottomNavigation>
//     </SafeAreaView>
//   );
// };

const MainStack = createStackNavigator();
const AppNavigator = () => {
  const backgroundColor = useBackgroundColor(2);

  const navigatorTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: backgroundColor,
    },
  };

  // <MainTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
  return (
    <NavigationContainer theme={navigatorTheme}>
      <MainStack.Navigator headerMode="none">
        <MainStack.Screen name="Main" component={MainScreen} />
        {/* <MainStack.Screen name="Setting" component={SettingsStackScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(permissionThunks.checkForegroundAsync());
  }, [dispatch]);

  return (
    <>
      <AppNavigator />
    </>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme} customMapping={themeMapping}>
        <SafeAreaProvider>
          <AppContent />
        </SafeAreaProvider>
      </ApplicationProvider>
    </Provider>
  );
}
