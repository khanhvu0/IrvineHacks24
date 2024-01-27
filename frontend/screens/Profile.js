import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';


import LeaderboardComp from '../components/LeaderboardComp';
import { isAvailableAsync } from 'expo-sensors/build/Pedometer';


export default function Profile() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  // const [PedometerAvailability, SetPedometerAvailability] = useState("");
  // const [StepCount, SetStepCount] = useState(0);


  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));


    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setHours(0, 0, 0)
      // start.setDate(end.getDate() - 1);


      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }


      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };


  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
  }, []);


// subscribe = () => {
//   const subscription = Pedometer.watchStepCount((result) => {
//     SetStepCount(result.steps);
//   });


//   Pedometer.isAvailableAsync().then(
//     (result) => {
//       SetPedometerAvailability(String(result));
//     },
//     (error) => {
//       SetPedometerAvailability(error);
//     }
//   );
// };


  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
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

