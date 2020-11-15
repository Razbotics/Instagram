import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CameraViewScreen from '../screens/CameraViewScreen';
import ChatScreen from '../screens/ChatScreen';
import HomeNavigator from './HomeNavigator';
import routes from './routes';

const Tab = createMaterialTopTabNavigator();

function AppNavigator({}) {
  return (
    <Tab.Navigator initialRouteName={routes.HOME} tabBar={() => null}>
      <Tab.Screen name={routes.CAMERA} component={CameraViewScreen} />
      <Tab.Screen name={routes.HOME} component={HomeNavigator} />
      <Tab.Screen name={routes.CHAT} component={ChatScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
