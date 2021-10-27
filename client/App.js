import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from './src/screens/Authenticated/BottomBarIcons/BottomBarIcons';
import Signin from './src/screens/Unauthenticated/Signin/Signin';
import Login from './src/screens/Unauthenticated/Login/Login';
import Home from './src/screens/Authenticated/Home/Home';

export default function App() {
  const Stack = createNativeStackNavigator();

  const Unauthenticated = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Signin' component={Signin} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );

  const Tab = createBottomTabNavigator();

  const Authenticated = () => (
    <Tab.Navigator
      screenOptions={
        ({ headerShown: false },
        ({ route }) => ({
          tabBarIcon: ({ focused, color }) => (
            <BottomBar focused={focused} variant={route.name} color={color} />
          ),
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gainsboro',
          tabBarStyle: { height: 100 },
        }))
      }
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Breathe' component={Home} />
      <Tab.Screen name='Advice' component={Home} />
      <Tab.Screen name='Profile' component={Home} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Unauthenticated' component={Unauthenticated} />
        <Stack.Screen name='Authenticated' component={Authenticated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
