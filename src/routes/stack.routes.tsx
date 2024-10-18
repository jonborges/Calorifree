import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from "../pages/Welcome";
import { UserInfo } from '../pages/UserInfo';
import { FitnessRoutes } from './tab.routes';  
import { ConfirmCatalogScreen } from '../pages/ConfirmCatalogScreen';  

import { AddFood } from "../pages/AddFood";
const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="Welcome"
      component={Welcome}
    />
    <Stack.Screen
      name="GetUserInfo"
      component={UserInfo}
    />
    <Stack.Screen
      name="ConfirmCatalogScreen" 
      component={ConfirmCatalogScreen}
    />
    <Stack.Screen
      name="FitnessRoutes"
      component={FitnessRoutes}  
    />
  </Stack.Navigator>
);

export default AppRoutes;
