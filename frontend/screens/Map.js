import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Mapping from '../map/index' 

export default function Map({ navigation }) {
  return (
    
    <View style={styles.bottomBox}>
      <View>
          <Text>
            Start of Map
          </Text>
          <Mapping>
          </Mapping>
          <Text>
            end of map
          </Text>
      </View>
      <View style={styles.horizontal}>
            <View>
                <Text style={styles.additionalText}>Running Time</Text>
                <Text style={styles.timeText}>Time: 0:01:23</Text>
            </View>
        <TouchableOpacity onPress={() => console.log('Button Pressed')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Button</Text>
            </View>
        </TouchableOpacity>
      </View>

      <View style={styles.innerbox}> 
        <View style={styles.item}>
            <Text style={styles.itemText}>10.2</Text>
            <Text style={styles.itemText}>miles</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemText}>10.2km</Text>
            <Text style={styles.itemText}>km</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemText}>10.2km</Text>
            <Text style={styles.itemText}>km</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  bottomBox: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '10%',
    left: '15%',
    padding: 10,
    backgroundColor: '#92e2fc',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  innerbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#82a9b5',
    padding: 5,
    borderRadius: 10,

  },
  additionalText: {
    marginRight: 50,
    color: 'black',
    marginBottom: 10,
  },
  timeText: {
    fontWeight: 'bold',
  },
  button: {
    marginLeft: 50,
    marginBottom: 40,
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'white',
  },
  item: {
    marginRight: 15,
    marginLeft: 15,
  },
  itemText: {
    textAlign: 'center',
    fontWeight: '300',
  },
});