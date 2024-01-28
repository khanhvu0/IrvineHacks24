import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MapBar() {
  return (
    <View style={styles.container}>
      <View style={styles.bottomBox}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBox: {
    alignItems: 'center',
    width: '70%',
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#92e2fc',
    borderRadius: 10,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 50, // Adjust the bottom value to position it lower
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
