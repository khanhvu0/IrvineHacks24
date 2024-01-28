import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LeaderboardComp from '../components/LeaderboardComp';

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const data = await getUsersAndSteps();
      setLeaderboardData(data || []);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error.message);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    onRefresh();
  }, []);

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
