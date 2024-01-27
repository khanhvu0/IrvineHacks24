import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PastActivity from '../components/PastActivity';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.bluebox}>
        <View style={styles.hello}>
          <View>
            <Text>Hello "Name"</Text>
            <Text>beginner</Text>
          </View>
          <TouchableOpacity>
            <Text>Settings Button</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.whitebox}>
          <View style={styles.whiteboxrow1}>
            <Text style={styles.weekgoal}>Week Goal: 50km</Text>
            <TouchableOpacity>
            <Text style={styles.whiteboxrow1}>Weekly Goals Button</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.whiteboxrow2}>
            <Text>35km done</Text>
            <TouchableOpacity>
            <Text>15km left</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.current}>
        <View>
          <Text>corrupt Img</Text>
        </View>
        <View style={styles.currentInfo}>
          <Text>Current Joggin</Text>
          <Text>0:03:44</Text>
        </View>
        <View style={styles.currentInfo}>
          <Text>10.9km</Text>
          <Text>539kcal</Text>
        </View>
      </View>

      <View style={styles.recent}>
        <PastActivity></PastActivity>
        <PastActivity></PastActivity>
        <PastActivity></PastActivity>
        <PastActivity></PastActivity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  bluebox: {
    alignItems: 'center',
    backgroundColor: 'blue',
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
    backgroundColor: 'white',
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
    backgroundColor: 'blue',
    marginTop: 25,
  },
  currentInfo: {
    color: 'white',
  },
  recent: {
    
  },
});