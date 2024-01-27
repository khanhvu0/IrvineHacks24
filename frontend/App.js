import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Login } from "./login/Login";
import { Register } from "./login/Register";
import { LoadingScreen } from "./login/LoadingScreen";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Map } from "./screens/Map";
import { Leaderboard } from "./screens/Leaderboard";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
			<Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
		</NavigationContainer>
  );
}

AppRegistry.registerComponent('frontend', () => App)
