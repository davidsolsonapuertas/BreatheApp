import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnauthenticatedHome from './src/screens/Unauthenticated/UnauthenticatedHome';
import Login from './src/components/Login';

export default function App() {
  const Stack = createNativeStackNavigator();

  const Unauthenticated = () => (
    <Stack.Navigator>
      <Stack.Screen
        name='UnauthenticatedHome'
        component={UnauthenticatedHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Unauthenticated' component={Unauthenticated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
