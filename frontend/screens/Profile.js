import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LeaderboardComp from '../components/LeaderboardComp';

export default function Profile() {
  return (
    <View style={styles.container}>

      <View style={styles.rows}>
        <LeaderboardComp number={1} name='Bob' points={99}/>
        <LeaderboardComp number={2} name='Henry' points={85}/>
        <LeaderboardComp number={3} name='Max' points={69}/>
        <LeaderboardComp number={4} name='Adi' points={24}/>
        <LeaderboardComp number={5} name='Ewu' points={20}/>
        <LeaderboardComp number={6} name='Kon' points={13}/>
        <LeaderboardComp number={7} name='Irvine' points={10}/>
        <LeaderboardComp number={8} name='Hacks' points={7}/>
        <LeaderboardComp number={9} name='Is' points={3}/>
        <LeaderboardComp number={10} name='Cool' points={1}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align to the bottom of the screen
    height: '100%', // Use 100% height
  },
  rows: {
    backgroundColor: '#0e75c4',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 70,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  }
});