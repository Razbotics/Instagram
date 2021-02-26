import 'react-native-gesture-handler';
import React from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation/RootNavigation';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import colors from './constants/colors';

IconFeather.loadFont();
IconMaterial.loadFont();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default App;
