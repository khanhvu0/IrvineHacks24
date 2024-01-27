import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
  Alert,
} from 'react-native';
import { CTAButton } from './CTAButton';
//import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';

export const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigation();

  const createProfile = async (response) => {
    db().ref(`/users/${response.user.uid}`).set({ name });
    db().ref(`/users/${response.user.uid}/leaderboard`).set({ totalSteps: 0})
  };

  const registerAndGoToMainFlow = async () => {
    if (email && password) {
        try {
            const response = await auth().createUserWithEmailAndPassword(
                email,
                password
            )
            if (response.user){
                await createProfile(response);
                nav.replace("MainTabNavigator")
            }
        } catch (e) {
            Alert.alert("Login failed, please try again.")
        }
    }
  };

  return (
    <Pressable style={styles.contentView} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.contentView}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Register</Text>
          </View>
          <View style={styles.mainContent}>
            <TextInput
              style={styles.loginTextField}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.loginTextField}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              inputMode="email"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.loginTextField}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <CTAButton
            title="Sign Up"
            onPress={registerAndGoToMainFlow}
            variant="primary"
          />
          <CTAButton title="Go Back" onPress={nav.goBack} variant="secondary" />
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginHorizontal: 50,
    backgroundColor: "white",
    paddingTop: 20,
  },
  titleContainer: {
    flex: 1.2,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 45,
    textAlign: "center",
    fontWeight: "200",
  },
  loginTextField: {
    borderBottomWidth: 1,
    height: 60,
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "300",
  },
  mainContent: {
    flex: 6,
  },
});