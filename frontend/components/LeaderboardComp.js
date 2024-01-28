/*
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Color } from '../GlobalStyles';

export default function LeaderboardComp({ filepath, number, name, points }) {
  return (
    <View>
      {number === 1 ? (
        <View style={styles.one}>
          <Image
              source={filepath}
              style={styles.profileImage}
            />
            <View style={styles.numberCirlceWrapper}>
              <View style={styles.numberCircle}>
              <Text style={styles.numberTextTop}>1</Text>
            </View> 
            </View>
          <Text style={styles.nameTextTop}>{name}</Text>
          <Text style={styles.pointsTextTop}>{points} points</Text>
        </View>
      ) : number === 2 ? (
    <View style={styles.horizontal}>
        <View style={styles.two}>
        <Image
              source={filepath}
              style={styles.profileImage}
            />
          <View style={styles.numberCircle}>
              <Text style={styles.numberTextTop}>2</Text>
            </View> 
          <Text style={styles.nameTextTop}>{name}</Text>
          <Text style={styles.pointsTextTop}>{points} points</Text>
        </View>
    </View>
      ) : number === 3 ? (
    <View style={styles.horizontal}>
        <View style={styles.three}>
        <Image
              source={filepath}
              style={styles.profileImage}
            />
          <View style={styles.numberCircle}>
              <Text style={styles.numberTextTop}>3</Text>
            </View> 
          <Text style={styles.nameTextTop}>{name}</Text>
          <Text style={styles.pointsTextTop}>{points} points</Text>
        </View>
    </View>
      ) : (
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
    backgroundColor: Color.white,
    borderRadius: 10,
    borderColor: '#c7c7c7',
    borderWidth: 2,
    fontSize: 50,
    marginBottom: 2,
    marginTop: 2,
  },
  one: {
    alignItems: 'center',
    transform: [{ translateY: 30 }],
  },
  two: {
    left: '-60%',
    alignItems: 'center',
  },
  three: {
    left: '60%',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  evenHoriz: {
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
    fontSize: 15,
    fontWeight: '600',
  },
  numberCircle: {
    backgroundColor: Color.blue,
    width: 30,
    height: 30,
    borderRadius: 15,
    transform: [{ translateY: -12 }],
  },
  numberTextTop: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    color: 'black',
    transform: [{ translateY: 3 }],
  },
  nameTextTop: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
    transform: [{ translateY: -10 }],
  },
  pointsTextTop: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    transform: [{ translateY: -10 }],
  },
  profileImage: {
    width: 60, // Set your desired width
    height: 60, // Set your desired height
    borderRadius: 30, // Half of the width and height to make it a circle
    borderWidth: 3,
    borderColor: Color.blue,
  },
  profileImageBoard: {
    width: 40, // Set your desired width
    height: 40, // Set your desired height
    borderRadius: 20, // Half of the width and height to make it a circle
    borderWidth: 3,
    borderColor: Color.blue,
    //transform: [{ translateY: 10 }],
  },
});
*/

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Color } from '../GlobalStyles';

export default function LeaderboardComp({ filepath, number, name, points }) {
  return (
    <View>
      {number === 1 ? (
        /* number 1 */
        <View style={styles.one}>
         <Image
              source={filepath}
              style={styles.profileImage}
            />
            <View style={styles.numberCirlceWrapper}>
              <View style={styles.numberCircle}>
              <Text style={styles.numberTextTop}>1</Text>
            </View> 
            </View>
          <Text style={styles.nameTextTop}>{name}</Text>
          <Text style={styles.pointsTextTop}>{points} Points</Text>
        </View>
      ) : number === 2 ? (
        /* number 2 */
    <View style={styles.horizontal}>
        <View style={styles.two}>
        <Image
              source={filepath}
              style={styles.profileImage}
            />
          <View style={styles.numberCircle}>
              <Text style={styles.numberTextTop}>2</Text>
            </View> 
          <Text style={styles.nameTextTop}>{name}</Text>
          <Text style={styles.pointsTextTop}>{points} Points</Text>
        </View>
    </View>
      ) : number === 3 ? (
        /* number 3 */
    <View style={styles.horizontal}>
        <View style={styles.three}>
        <Image
              source={filepath}
              style={styles.profileImage}
            />
          <View style={styles.numberCircle}>
              <Text style={styles.numberTextTop}>3</Text>
            </View> 
          <Text style={styles.nameTextTop}>{name}</Text>
          <Text style={styles.pointsTextTop}>{points} Points</Text>
        </View>
    </View>
      ) : (
        /* after number 3 */
        <View style={styles.box}>

<View style={styles.evenHoriz}>
            <View style={styles.horizontal}>
              <Text style={styles.numberText}>{number}  </Text>

              <Image
                  source={filepath}
                  style={styles.profileImageBoard}
                /> 
            </View>

            <Text style={styles.nameText}>
              {name}</Text>

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
      backgroundColor: Color.white,
      borderRadius: 10,
      borderColor: '#c7c7c7',
      borderWidth: 2,
      fontSize: 50,
      marginBottom: 2,
      marginTop: 2,
    },
    one: {
      alignItems: 'center',
      transform: [{ translateY: 30 }],
    },
    two: {
      left: '-60%',
      alignItems: 'center',
    },
    three: {
      left: '60%',
      alignItems: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    evenHoriz: {
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
      fontSize: 15,
      fontWeight: '600',
    },
    numberCircle: {
      backgroundColor: Color.gray,
      width: 30,
      height: 30,
      borderRadius: 15,
      transform: [{ translateY: -12 }],
    },
    numberTextTop: {
      fontSize: 20,
      fontWeight: '800',
      textAlign: 'center',
      color: 'black',
      transform: [{ translateY: 3 }],
    },
    nameTextTop: {
      fontSize: 15,
      fontWeight: '300',
      color: 'white',
      transform: [{ translateY: -10 }],
    },
    pointsTextTop: {
      marginTop: 3,
      fontSize: 15,
      fontWeight: '800',
      color: 'white',
      transform: [{ translateY: -10 }],
    },
    profileImage: {
      width: 60, // Set your desired width
      height: 60, // Set your desired height
      borderRadius: 30, // Half of the width and height to make it a circle
      //borderWidth: 2,
      //borderColor: Color.gray,
    },
    profileImageBoard: {
      width: 40, // Set your desired width
      height: 40, // Set your desired height
      borderRadius: 20, // Half of the width and height to make it a circle
      //borderWidth: 2,
      //borderColor: Color.blue,
      //transform: [{ translateY: 10 }],
    },
  });