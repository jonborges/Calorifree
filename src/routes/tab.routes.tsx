import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { AddFood } from '../pages/AddFood';
import { AddActivity } from '../pages/AddActivity';
import { Resume } from '../pages/Resume';

const AppTab = createBottomTabNavigator();
export const FitnessRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
        },
      }}
    >
      <AppTab.Screen
        name="Alimentos"
        component={AddFood}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons
              name="restaurant-menu"
              size={focused ? size * 1.2 : size}  
              color={color}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Atividades"
        component={AddActivity}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons
              name="directions-run"
              size={focused ? size * 1.2 : size}  
              color={color}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons
              name="show-chart"
              size={focused ? size * 1.2 : size}  
              color={color}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default FitnessRoutes;
