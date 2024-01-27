import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

import LeaderboardComp from '../components/LeaderboardComp';

export default function Profile() {
  const [PedometerAvailability, SetPedometerAvailability] = useState("");
  const [StepCount, SetStepCount] = useState(0);

  React.useEffect(() => {
    subscribe();
  }, []);

subscribe = () => {
  const subscription = Pedometer.watchStepCount((result) => {
    SetStepCount(result.steps);
  });

  Pedometer.isAvailableAsync().then(
    (result) => {
      SetPedometerAvailability(String(result));
    },
    (error) => {
      SetPedometerAvailability(error);
    }
  );
};

  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Text>Total steps: {StepCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});