import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './screens/Home'
import Profile from './screens/Profile'
import Map from './screens/Map'
import Leaderboard from './screens/Leaderboard'
import Page from './map/index'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
			<Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Profile" component={Profile} />
				<Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen name="Test" component={Page} />
			</Tab.Navigator>
		</NavigationContainer>
  );
}

