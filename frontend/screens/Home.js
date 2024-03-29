import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';
import PastActivity from '../components/PastActivity';
import { Color } from '../GlobalStyles';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { onValue, ref } from 'firebase/database';

  const map1 = require('../images/map_1.jpeg');
  const map2 = require('../images/map_2.jpeg');
  const map3 = require('../images/map_3.jpeg');

  const CircularProgressBar = ({ dailySteps, goalSteps }) => {
    const strokeWidth = 10;
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
  
    const progress = (dailySteps / goalSteps) * 100;
    const progressValue = Math.min(progress, 100); // Ensure the value is between 0 and 100
  
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (progressValue / 100) * circumference;
  
    return (
      <View style={styles.container}>
        <Svg height="200" width="200">
          <Circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#e0e0e0"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <Circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#00cc00" // Green color for the progress
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
          />
          <SvgText x="50%" y="50%" textAnchor="middle" stroke="#000" fontSize="20" fontWeight="bold">
            {`${dailySteps}/${goalSteps}`}
          </SvgText>
        </Svg>
      </View>
    );
  };


export default function Home() {
  const [dailySteps, setDailySteps] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch the user's daily steps from Firebase
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      const userId = user.uid;
      const dailyStepsRef = ref(FIREBASE_DB, `dailySteps/${userId}`);
      
      // Listen for changes in the database
      onValue(dailyStepsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setDailySteps(data.dailySteps || 0);
          setUsername(data.name || "");
        }
      });
    }
  }, []);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.bluebox}>
        <View style={styles.hello}>
          <View>
            <Text style={styles.Hello}>hello <Text style={styles.Name}>Max!</Text></Text>
            <Text style={styles.beginner}>level: beginner</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../images/leaderboard/person4.jpg')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.progressText}>Your Progress</Text>
        <View style={styles.progress}>
          <CircularProgressBar dailySteps={dailySteps} goalSteps={20000} />
        </View>
        

      </View>

      <View style={styles.current}>
        <View>
        <Image
              source={require('../images/running.png')}
              style={styles.profileImage}
            />
        </View>
        <View style={styles.currentInfo}>
          <Text style={styles.currentRun}>Current: Morning Walk</Text>
          <Text style={styles.whiteText}>0:23:44</Text>
        </View>
        <View style={styles.currentInfo}>
          <Text style={styles.currentRunDistance}>10.9km</Text>
          <Text style={styles.currentRunCal}>539kcal</Text>
        </View>
      </View>

      <View style={styles.recent}>
        <PastActivity filepath={map1} date="December 19th, 8:59AM" distance={12}/>
        <PastActivity filepath={map2} date="November 26th, 7:50AM" distance={9}/>
        <PastActivity filepath={map3} date="November 17th, 8:02AM" distance={8}/>
        <PastActivity filepath={map1} date="November 16th, 8:59AM" distance={11}/>
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
  bluebox: {
    alignItems: 'center',
    backgroundColor: Color.blue,
    width: '100%',
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  hello: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    top: 60,
  },
  whitebox: {
    backgroundColor: Color.white,
    width: '80%',
    height: '50%',
    transform: [{ translateY: 80 }],
    borderRadius: 20,
    padding: 10,
  },
  whiteboxrow1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  whiteboxrow2: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  current: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: '10%',
    borderRadius: 30,
    padding: 10,
    backgroundColor: Color.blue,
    marginTop: 30,
    marginBottom: 25,
    transform: [{ translateY: 210 }],
  },
  currentInfo: {
    color: Color.white,
    alignItems: 'center',
  },
  recent: {
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: 30,
    width: '80%',
    marginTop: 200,
  },
  whiteText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 10,
  },
  Hello: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  Name: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  beginner: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  weekgoal: {
    fontSize: 13,
    fontWeight: 600,
  },
  kmBar: {
    color: 'gray',
    fontSize: 11,
    fontWeight: 400,
  },
  currentRun: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '600',
  },
  currentRunDistance: {
    color: 'white',
    fontSize: 11,
    fontWeight: 700,
  },
  currentRunCal: {
    color: 'white',
    fontSize: 11,
    fontWeight: 300,
  },
  profileImage: {
    width: 70, // Set your desired width
    height: 70, // Set your desired height
    borderRadius: 35, // Half of the width and height to make it a circle
  },
  progress: {
    transform: [{ translateY: 85 }],
  },
  progressText: {
    color: 'black',
    transform: [{ translateY: 90 }],
    fontSize:  30,
    fontWeight: '800',
  }
});

