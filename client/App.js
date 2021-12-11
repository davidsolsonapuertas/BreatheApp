import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from './src/screens/Authenticated/BottomBarIcons/BottomBarIcons';
import Signin from './src/screens/Unauthenticated/Signin/Signin';
import Login from './src/screens/Unauthenticated/Login/Login';
import Home from './src/screens/Authenticated/Home/Home';
import { AuthProvider } from './src/context';
import { LogBox } from 'react-native';
import Breathe from './src/screens/Authenticated/Breathe/Breathe';
import Advice from './src/screens/Authenticated/Advice/Advice';
import ExerciseOne from './src/screens/Authenticated/ExerciseOne/ExerciseOne';

export default function App() {
  const Stack = createNativeStackNavigator();
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

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
      <Tab.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name='Breathe' component={Breathe} />
      <Tab.Screen name='Advice' component={Advice} />
    </Tab.Navigator>
  );

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Unauthenticated' component={Unauthenticated} />
          <Stack.Screen name='Authenticated' component={Authenticated} />
          <Stack.Screen name='ExerciseOne' component={ExerciseOne} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
