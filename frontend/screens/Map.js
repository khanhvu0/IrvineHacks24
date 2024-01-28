import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Mapping from '../map/index';
import MapBar from '../components/MapBar';

export default function Map() {
  return (
    <View style={styles.container}>
      <View>
        <Mapping />
        <Text style={styles.hidden}>------------------------------------------------------------</Text>
      </View>
      <MapBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hidden: {
    backgroundColor: 'white',
    color: 'white',
    height: 0.001,
  },
});
