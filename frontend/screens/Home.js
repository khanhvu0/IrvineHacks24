import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PastActivity from '../components/PastActivity';
import { Color } from '../GlobalStyles';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.bluebox}>
        <View style={styles.hello}>
          <View>
            <Text style={styles.whiteText}>Hello "Name"</Text>
            <Text style={styles.whiteText}>beginner</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.whiteText}>Settings Button</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.whitebox}>
          <View style={styles.whiteboxrow1}>
            <Text style={styles.weekgoal}>Week Goal: 50km</Text>
            <TouchableOpacity>
              <Text >Weekly Goals Button</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.whiteboxrow2}>
            <Text>35km done</Text>
            <TouchableOpacity>
              <Text >15km left</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.current}>
        <View>
          <Text style={styles.whiteText}>corrupt Img</Text>
        </View>
        <View style={styles.currentInfo}>
          <Text style={styles.whiteText}>Current Joggin</Text>
          <Text style={styles.whiteText}>0:03:44</Text>
        </View>
        <View style={styles.currentInfo}>
          <Text style={styles.whiteText}>10.9km</Text>
          <Text style={styles.whiteText}>539kcal</Text>
        </View>
      </View>

      <View style={styles.recent}>
        <PastActivity />
        <PastActivity />
        <PastActivity />
        <PastActivity />
      </View>
    </View>
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
    height: '30%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  hello: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    left: 40,
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
  },
  currentInfo: {
    color: 'white',
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
});

