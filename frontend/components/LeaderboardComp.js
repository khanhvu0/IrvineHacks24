import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LeaderboardComp({ number, name, points }) {
  return (
    <View>
      {number === 1 ? (
        /* number 1 */
        <View style={styles.one}>
          <Text style={styles.numberTextTop}>1.</Text>
          <Text style={styles.nameTextTop}>{name}</Text>
          <Text style={styles.pointsTextTop}>{points} points</Text>
        </View>
      ) : number === 2 ? (
        /* number 2 */
    <View style={styles.horizontal}>
        <View style={styles.two}>
          <Text style={styles.numberTextTop}>2.</Text>
          <Text style={styles.nameTextTop}>{name}</Text>
          <Text style={styles.pointsTextTop}>{points} points</Text>
        </View>
    </View>
      ) : number === 3 ? (
        /* number 3 */
    <View style={styles.horizontal}>
        <View style={styles.three}>
          <Text style={styles.numberTextTop}>3.</Text>
          <Text style={styles.nameTextTop}>{name}</Text>
          <Text style={styles.pointsTextTop}>{points} points</Text>
        </View>
    </View>
      ) : (
        /* after number 3 */
        <View style={styles.box}>
          <View style={styles.horizontal}>
            <Text style={styles.nameText}><Text style={styles.numberText}>{number}. </Text> pic {name}</Text>
            <Text style={styles.pointsText}>{points} points</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '95%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#c7c7c7',
    borderWidth: 2,
    fontSize: 50,
    marginBottom: 2,
    marginTop: 2,
  },
  one: {
    alignItems: 'center',
  },
  two: {
    left: '-180%',
    alignItems: 'center',
  },
  three: {
    left: '180%',
    transform: [{ translateY: -55 }],
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  numberText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 15,
    fontWeight: '300',
  },
  pointsText: {
    fontWeight: '600',
  },
  numberTextTop: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  nameTextTop: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  pointsTextTop: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
});