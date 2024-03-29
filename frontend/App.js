import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { onAuthStateChanged } from 'firebase/auth';

import Home from './screens/Home'
import Profile from './screens/Profile'
import Map from './screens/Map'
import Leaderboard from './screens/Leaderboard'
import Page from './map/index'
import Login from './login/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false, 
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faHouse} />
        ),}} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} options={{ headerShown: false, 
      tabBarIcon: () => (
        <FontAwesomeIcon icon={faChartSimple} />
      ),}} /> 
      <Tab.Screen name="Map" component={Map} options={{ headerShown: false, 
      tabBarIcon: () => (
        <FontAwesomeIcon icon={faMapLocationDot} />
      ),}} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, 
      tabBarIcon: () => (
        <FontAwesomeIcon icon={faUser} />
      ), }} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authenticatedUser) => {
      // console.log('user', authenticatedUser);
      setUser(authenticatedUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <MainStackNavigator />}
    </NavigationContainer>
  );

}

