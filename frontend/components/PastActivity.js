import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PastActivity({ pathName, date, distance, time }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.horizontal}>
        <View style={styles.activityImage}>
          <Text>Image</Text>
        </View>
        <View style={styles.activityInfo}>
          <Text>Date: november 19th</Text>
          <Text>10.36km</Text>
          <Text>701kcal 11.2km/hr</Text>
        </View>
        <TouchableOpacity>
          <Text>button</Text>
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
});
