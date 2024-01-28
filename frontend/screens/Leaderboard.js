import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Color } from '../GlobalStyles';

import LeaderboardComp from '../components/LeaderboardComp';

const person1 = require('../images/leaderboard/person1.png');
const person2 = require('../images/leaderboard/person2.png');
const person3 = require('../images/leaderboard/person3.png');
const person4 = require('../images/leaderboard/person4.jpg');
const person5 = require('../images/leaderboard/person5.png');
const person6 = require('../images/leaderboard/person6.png');
const person7 = require('../images/leaderboard/person7.png');
const person8 = require('../images/leaderboard/person8.png');
const person9 = require('../images/leaderboard/person9.png');
const person10 = require('../images/leaderboard/person10.png');


export default function Profile() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.rows1}>
        <LeaderboardComp filepath={person1} number={1} name='Bob' points={99}/>
        <View style={styles.horiz}>
        <LeaderboardComp filepath={person2} number={2} name='Henry' points={85}/>
        <LeaderboardComp filepath={person3} number={3} name='Max' points={69}/>
        </View>
      </View>

        <View style={styles.rows}>
        <LeaderboardComp filepath={person4} number={4} name='Adi' points={24}/>
        <LeaderboardComp filepath={person5} number={5} name='Ewu' points={20}/>
        <LeaderboardComp filepath={person6} number={6} name='Kon' points={13}/>
        <LeaderboardComp filepath={person7} number={7} name='Irvine' points={10}/>
        <LeaderboardComp filepath={person8} number={8} name='Hacks' points={7}/>
        <LeaderboardComp filepath={person9} number={9} name='Is' points={3}/>
        <LeaderboardComp filepath={person10} number={10} name='Cool' points={1}/>
      </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.gray,
    alignItems: 'center',
    justifyContent: 'flex-end', // Align to the bottom of the screen
    height: '100%', // Use 100% height
  },
  rows: {
    backgroundColor: Color.blue,
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rows1: {
    backgroundColor: Color.gray,
    alignItems: 'center',
    width: '100%',
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  horiz: {
    flexDirection: 'row',
  }
});