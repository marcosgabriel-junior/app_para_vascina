import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './app/index';
import Profile from './app/Profile';
import MainPage from './app/MainPage';
import Settings from './app/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false // Isso remove TODOS os cabeçalhos
        }}
      >
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}