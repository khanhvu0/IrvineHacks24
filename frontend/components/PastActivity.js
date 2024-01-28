import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function PastActivity({ filepath, date, distance }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.horizontal}>
        <View style={styles.activityImage}>
        <Image
              source={filepath}
              style={styles.image}
            ></Image> 
        </View>
        <View style={styles.activityInfo}>
          <Text style={styles.date}>{date},</Text>
          <Text style={styles.distance}>{distance} km</Text>
          <Text style={styles.data}>701kcal 11.2km/hr</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.button}>></Text>
        </TouchableOpacity>
      </View>

      {/* Draw a line at the bottom */}
      <View style={styles.line} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  activityImage: {
    backgroundColor: 'white',
  },
  activityInfo: {
    marginRight: 80,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '70%',
    marginTop: 10, // Adjust the margin as needed
  },
  date: {
    fontSize: '11',
    fontWeight: '300',
  },
  distance: {
    padding: 10,
    fontSize: '15',
    fontWeight: '600',
  },
  data: {
    fontSize: '11',
    fontWeight: '300',
    marginBottom: 10,
  },
  button: {
    fontSize: '20',
    fontWeight: '200',
  },
  image: {
    width: 50, // Set your desired width
    height: 50, // Set your desired height
    borderRadius: 25, // Half of the width and height to make it a circle
  },
});
