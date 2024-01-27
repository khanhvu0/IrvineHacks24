import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';


import LeaderboardComp from '../components/LeaderboardComp';
import { isAvailableAsync } from 'expo-sensors/build/Pedometer';


export default function Profile() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [yesterdayStepCount, setYesterdayStepCount] = useState(0);
  const [twoStepCount, setTwoStepCount] = useState(0);
  const [threeStepCount, setThreeStepCount] = useState(0);
  const [fourStepCount, setFourStepCount] = useState(0);
  const [fiveStepCount, setFiveStepCount] = useState(0);
  const [sixStepCount, setSixStepCount] = useState(0);
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
      const endYesterday = new Date();
      const startYesterday = new Date();
      const end2 = new Date();
      const start2 = new Date();
      const end3 = new Date();
      const start3 = new Date();
      const end4 = new Date();
      const start4 = new Date();
      const end5 = new Date();
      const start5 = new Date();
      const end6 = new Date();
      const start6 = new Date();
      startYesterday.setDate(end.getDate() - 1);
      end2.setDate(startYesterday.getDate());
      start2.setDate(end2.getDate() - 1);
      end3.setDate(start2.getDate());
      start3.setDate(end3.getDate() - 1);
      end4.setDate(start3.getDate());
      start4.setDate(end4.getDate() - 1);
      end5.setDate(start4.getDate());
      start5.setDate(end5.getDate() - 1);
      end6.setDate(start5.getDate());
      start6.setDate(end6.getDate() - 1);
      start.setHours(0, 0, 0)
      endYesterday.setHours(0, 0, 0)
      startYesterday.setHours(0, 0, 0)
      end2.setHours(0, 0, 0)
      start2.setHours(0, 0, 0)
      end3.setHours(0, 0, 0)
      start3.setHours(0, 0, 0)
      end4.setHours(0, 0, 0)
      start4.setHours(0, 0, 0)
      end5.setHours(0, 0, 0)
      start5.setHours(0, 0, 0)
      end6.setHours(0, 0, 0)
      start6.setHours(0, 0, 0)
      
      // start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      const yesterdayStepCountResult = await Pedometer.getStepCountAsync(startYesterday, endYesterday);
      const StepCountResult2 = await Pedometer.getStepCountAsync(start2, end2);
      const StepCountResult3 = await Pedometer.getStepCountAsync(start3, end3);
      const StepCountResult4 = await Pedometer.getStepCountAsync(start4, end4);
      const StepCountResult5 = await Pedometer.getStepCountAsync(start5, end5);
      const StepCountResult6 = await Pedometer.getStepCountAsync(start6, end6);

      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      if (yesterdayStepCountResult) {
        setYesterdayStepCount(yesterdayStepCountResult.steps);
      }

      if (StepCountResult2) {
        setTwoStepCount(StepCountResult2.steps);
      }

      if (StepCountResult3) {
        setThreeStepCount(StepCountResult3.steps);
      }

      if (StepCountResult4) {
        setFourStepCount(StepCountResult4.steps);
      }

      if (StepCountResult5) {
        setFiveStepCount(StepCountResult5.steps);
      }

      if (StepCountResult6) {
        setSixStepCount(StepCountResult6.steps);
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
      <Text>Steps taken today: {pastStepCount + currentStepCount}</Text>
      <Text>Steps taken yesterday: {yesterdayStepCount}</Text>
      <Text>Steps taken 2 days ago: {twoStepCount}</Text>
      <Text>Steps taken 3 days ago: {threeStepCount}</Text>
      <Text>Steps taken 4 days ago: {fourStepCount}</Text>
      <Text>Steps taken 5 days ago: {fiveStepCount}</Text>
      <Text>Steps taken 6 days ago: {sixStepCount}</Text>
      <Text>Steps taken this week: {pastStepCount + currentStepCount + yesterdayStepCount + twoStepCount +
      threeStepCount + fourStepCount + fiveStepCount + sixStepCount}</Text>
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

