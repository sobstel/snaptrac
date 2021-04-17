import React from 'react';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as eva from '@eva-design/eva';
import theme from 'theme/theme';
import themeMapping from 'theme/mapping';
import {
  IconRegistry,
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import useBackgroundColor from 'hooks/useBackgroundColor';
import MeScreen from 'screens/me';
import SettingsScreen from 'screens/settings';

const MeStack = createStackNavigator();
const MeStackScreen = () => (
  <MeStack.Navigator headerMode="none">
    <MeStack.Screen name="Me" component={MeScreen} />
  </MeStack.Navigator>
);

const SettintsStack = createStackNavigator();
const SettingsStackScreen = () => (
  <SettintsStack.Navigator headerMode="none">
    <SettintsStack.Screen name="Settings" component={SettingsScreen} />
  </SettintsStack.Navigator>
);

const RadioIcon = props => <Icon {...props} name="radio-outline" />;
const SettingsIcon = props => <Icon {...props} name="settings-2-outline" />;

const BottomTabBar = ({ navigation, state }) => {
  const backgroundColor = useBackgroundColor();

  return (
    <SafeAreaView edges={['bottom']} mode="padding" style={{ backgroundColor }}>
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
      >
        <BottomNavigationTab icon={RadioIcon} />
        <BottomNavigationTab icon={SettingsIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const MainTab = createBottomTabNavigator();
const AppNavigator = () => {
  const backgroundColor = useBackgroundColor(2);

  const navigatorTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: backgroundColor,
    },
  };

  return (
    <NavigationContainer theme={navigatorTheme}>
      <MainTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <MainTab.Screen name="Me" component={MeStackScreen} />
        <MainTab.Screen name="Setting" component={SettingsStackScreen} />
      </MainTab.Navigator>
    </NavigationContainer>
  );
};

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
    <>
      <StatusBar style="light" />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme} customMapping={themeMapping}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}
