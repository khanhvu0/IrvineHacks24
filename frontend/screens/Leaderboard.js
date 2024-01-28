import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, RefreshControl } from 'react-native';
import LeaderboardComp from '../components/LeaderboardComp';
import { ref, get } from 'firebase/database';
import { FIREBASE_DB } from '../FirebaseConfig';

const getUsersAndSteps = async () => {
  try {
    const usersRef = ref(FIREBASE_DB, 'dailySteps');
    const snapshot = await get(usersRef);
    
    const usersArray = [];
    snapshot.forEach((childSnapshot) => {
      const user = {
        userId: childSnapshot.key,
        ...childSnapshot.val(),
      };
      usersArray.push(user);
    });

    // Sort the array by dailySteps in descending order
    const sortedUsers = usersArray.sort((a, b) => b.dailySteps - a.dailySteps);

    const usersDictionary = {};
    sortedUsers.forEach((user) => {
      usersDictionary[user.userId] = {
        username: user.name,
        dailySteps: user.dailySteps,
      };
    });

    console.log('Fetched data:', usersDictionary);
    return usersDictionary;
  } catch (error) {
    console.error('Error retrieving users and steps:', error.message);
    throw error;
  }
};

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
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <View style={styles.container}>
        <View style={styles.rows}>
          {Object.keys(leaderboardData).map((userId, index) => {
            const userData = leaderboardData[userId];
            return (
              <LeaderboardComp
                key={userId}
                number={index + 1}
                name={userData.username || `User ${index + 1}`} // Use a default if username is undefined
                points={userData.dailySteps || 0} // Use 0 if dailySteps is undefined
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
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
