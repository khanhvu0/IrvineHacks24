import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Mapping from '../map/index';
import {useState} from 'react'
import { Color } from '../GlobalStyles';

export default function Map() {

  const [following, setFollowing] = useState(false);

  return (
    <View style={styles.container1}>
      <View>
        <Mapping followingState={following} />
        <Text style={styles.hidden}>------------------------------------------------------------</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.bottomBox}>
        <View style={styles.horizontal}>
          <View>
            <Text style={styles.runTime}>Run Time</Text>
            <Text style={styles.timeText}>01:45:23</Text>
          </View>

          <View style={styles.topright}>
          <TouchableOpacity onPress={() => setFollowing(!following)}>
            <View style={styles.followButton}>
              <Image source={require('../images/location.png')} style={styles.location}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Button Pressed')}>
            <View style={styles.button}>
              <Image source={require('../images/pause.webp')} style={styles.pause}/>
            </View>
          </TouchableOpacity>
          </View>

        </View>

        <View style={styles.innerbox}>
          <View style={styles.item}>
            <Text style={styles.itemNum}>10.9</Text>
            <Text style={styles.itemText}>km</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.item}>
            <Text style={styles.itemNum}>539</Text>
            <Text style={styles.itemText}>kcal</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.item}>
            <Text style={styles.itemNum}>12.3</Text>
            <Text style={styles.itemText}>km/hr</Text>
          </View>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hidden: {
    backgroundColor: 'white',
    color: 'white',
    height: 0.001,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBox: {
    alignItems: 'center',
    width: '55%',
    borderRadius: 15,
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 50, // Adjust the bottom value to position it lower
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.gray,
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  runTime: {
    marginRight: 50,
    marginBottom: 15,
    fontSize: '15',
    fontWeight: '300',
  },
  timeText: {
    fontSize: '25',
    fontWeight: '800',
  },
  followButton: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
  },
  item: {
    marginRight: 15,
    marginLeft: 15,
  },
  itemNum: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: '15',
  },
  itemText: {
    textAlign: 'right',
    fontWeight: '300',
    fontSize: '10',
  },
  location: {
    width: 40, // Set your desired width
    height: 40, // Set your desired height
    transform: [{ translateY: -3 }],
  },
  pause: {
    width: 35, // Set your desired width
    height: 35, // Set your desired height
  },
  topright: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  line: {
    borderLeftWidth: 1,
    borderLeftColor: Color.blue,
    width: '0%',
    marginTop: 10, // Adjust the margin as needed
  },
});
