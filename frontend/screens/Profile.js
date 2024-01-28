import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

import { ref, set, update } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import LeaderboardComp from '../components/LeaderboardComp';
import { isAvailableAsync } from 'expo-sensors/build/Pedometer';

import ProfileOptions from '../components/ProfileOptions';
import {Color} from '../GlobalStyles';
const hand = require('../images/hand.png');
const trophy = require('../images/trophy.png');
const gear = require('../images/gear.png');
const contact = require('../images/contact.png');

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
  // const [weeklyStepCount, setWeeklyStepCount] = useState(0);


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

      // setWeeklyStepCount(pastStepCountResult.steps + StepCountResult2.steps + StepCountResult3.steps + StepCountResult4.steps + StepCountResult5.steps + StepCountResult6.steps);

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);

        const user = FIREBASE_AUTH.currentUser;
        if (user) {
          const userId = user.uid;

          // Update the database with the current step count
          update(ref(FIREBASE_DB, `dailySteps/` + userId), {
            name: user.displayName,
            email: user.email,
            dailySteps: result.steps + pastStepCountResult.steps,
            weeklySteps: result.steps + yesterdayStepCountResult.steps + pastStepCountResult.steps + StepCountResult2.steps + StepCountResult3.steps + StepCountResult4.steps + StepCountResult5.steps + StepCountResult6.steps,
            bonusSteps: 0, // change this
          });
          console.log(userId + result.steps);
        }
      });
    }
  };

  useEffect(() => {
    let subscription;
  
    const startSubscription = async () => {
      subscription = subscribe();
    };
  
    startSubscription();

    return () => {
      // Unsubscribe from the Pedometer subscription when the component is unmounted
      if (subscription) {
        //subscription.remove();
      }
    };
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

/*
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
}*/

return(
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.bluebox}>
        <View style={styles.hello}>
          <View>
            <Text style={styles.profile}>Profile </Text>
            <Image
              source={require('../images/profilepic.jpeg')}
              style={styles.profileImage}
            />
            <Text style={styles.Name}>Max</Text>
            <Text style={styles.beginner}>Intermediate</Text>
          </View>
        </View>
        <View style={styles.whitebox}>
          <View style={styles.whiteboxrow1}>
            <Text style={styles.totalProgress}>Total Progress</Text>
            <TouchableOpacity>
              <Text style={styles.button}>></Text>
            </TouchableOpacity>
          </View>
            <View style={styles.innerbox}>
              <View style={styles.progressTab}>
              <Image
              source={require('../images/runningMan.jpeg')}
              style={styles.image}
            />
                <View style={styles.item}>
                  <Text style={styles.itemNum}>375.4</Text>
                  <Text style={styles.itemText}>km</Text>
                </View>
              </View>

              <View style={styles.line} />

              <View style={styles.progressTab}>
                <Image
                source={require('../images/clock.jpeg')}
                style={styles.image}
              />
                <View style={styles.item}>
                  <Text style={styles.itemNum}>65.8</Text>
                  <Text style={styles.itemText}>hr</Text>
                </View>
              </View>

              <View style={styles.line} />

              <View style={styles.progressTab}>
                <Image
                  source={require('../images/calories.jpeg')}
                  style={styles.image}
                />
                <View style={styles.item}>
                  <Text style={styles.itemNum}>65.3k</Text>
                  <Text style={styles.itemText}>kcal</Text>
                </View>
              </View>
          
          </View>
        </View>

      </View>


      <View style={styles.profileOptionsStyle}>
        <ProfileOptions filepath={hand} title='Personal' />
        <ProfileOptions filepath={trophy} title='Achievements' />
        <ProfileOptions filepath={gear} title='Settings' />
        <ProfileOptions filepath={contact} title='Contact Us' />
      </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.grey,
  },
    //bluebox==================================================
  bluebox: {
    alignItems: 'center',
    backgroundColor: Color.blue,
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  hello: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 60,
  },
  profile: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  profileImage: {
    width: 100, // Set your desired width
    height: 100, // Set your desired height
    borderRadius: 50, // Half of the width and height to make it a circle
    marginBottom: 5,
  },
  Name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  beginner: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  //whitebox==================================================
  whitebox: {
    backgroundColor: Color.gray,
    width: '85%',
    height: 150,
    transform: [{ translateY: 80 }],
    borderRadius: 20,
    padding: 10,
  },
  whiteboxrow1: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalProgress: {
    fontSize: 13,
    fontWeight: '600',
  },
  button: {
    color: 'gray',
    fontSize: 11,
    fontWeight: '400',
  },
  innerbox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: Color.white,
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 20,
  },
  item: {
    marginRight: 15,
    marginLeft: 8,
  },
  itemNum: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '20',
  },
  itemText: {
    textAlign: 'right',
    fontWeight: '300',
    fontSize: 10,
  },
  line: {
    borderLeftWidth: 1,
    borderLeftColor: Color.blue,
    width: '0%',
    padding: 5,
  },
  progressTab:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image:{
    width: 30, // Set your desired width
    height: 30, // Set your desired height
    borderRadius: 15, // Half of the width and height to make it a circle
  },
    //profileOptions==================================================
  profileOptionsStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 330,
    borderRadius: 30,
    padding: 10,
    backgroundColor: Color.white,
    transform: [{ translateY: 120 }],
  },

  currentInfo: {
    color: 'white',
    alignItems: 'center',
  },
  recent: {
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: 30,
    width: '80%',
  },
  whiteText: {
    color: 'white',
  },
  
  currentRun: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  currentRunDistance: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  currentRunCal: {
    color: 'white',
    fontSize: 11,
    fontWeight: '300',
  },
});

