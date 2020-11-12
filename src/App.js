import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation/RootNavigation';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';

function App() {
  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
