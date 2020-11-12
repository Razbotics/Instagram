import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import CameraViewScreen from '../screens/CameraViewScreen';
import ChatScreen from '../screens/ChatScreen';
import routes from './routes';

const Tab = createMaterialTopTabNavigator();

function AppNavigator({}) {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME}
      tabBarOptions={{showLabel: false, style: {height: 0}}}>
      <Tab.Screen name={routes.CAMERA} component={CameraViewScreen} />
      <Tab.Screen name={routes.HOME} component={HomeScreen} />
      <Tab.Screen name={routes.CHAT} component={ChatScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
