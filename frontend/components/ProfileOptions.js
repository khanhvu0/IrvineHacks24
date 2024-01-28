import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Profile({ filepath, title }) {
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
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.button}></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  activityImage: {
    backgroundColor: 'white',
  },
  activityInfo: {
    marginRight: 80,
  },
  line: {
    borderBottomWidth: 5,
    borderBottomColor: 'black',
    backgroundColor: 'black',
    width: '70%',
    marginTop: 0, // Adjust the margin as needed
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray',
  },
  button: {
    fontSize: 20,
    fontWeight: '800',
    color: 'gray',
  },
  image: {
    width: 50, // Set your desired width
    height: 50, // Set your desired height
    borderRadius: 25, // Half of the width and height to make it a circle
  },
});
