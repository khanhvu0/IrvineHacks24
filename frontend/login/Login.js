import { View, TextInput, StyleSheet, ActivityIndicator, Button, KeyboardAvoidingView, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Color } from '../GlobalStyles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            // console.log(response);
        } catch (error) {
            console.log(error);
            alert('Login failed, please try again: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async () => {
        setLoading(true);
        try {
            if (!username.trim()) {
                alert('Please enter a username');
                return;
            }
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: username,
              });
            // console.log(response);
        } catch (error) {
            console.log(error);
            alert('Sign up failed, please try again: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <View style={styles.bluebox}>
                        <Image source={require('../images/2.png')} style={styles.image} />
                </View>

                <View style={styles.inputs}>
                    <TextInput value={username} style={styles.input} placeholder='Username' onChangeText={setUsername} />

                    <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none'
                        onChangeText={(text) => setEmail(text)}></TextInput>

                    <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none'
                        onChangeText={(text) => setPassword(text)}></TextInput>
                </View>
            
                {loading ? (
                    <ActivityIndicator size="large" color='#0000ff' />
                ) : (
                    <>
                        <View style={styles.buttons}>
                            <View style={styles.login}>
                                <Button title="Login" onPress={signIn} />
                            </View>
                            <View style={styles.create}>
                            <Button title="Create account" onPress={signUp} />
                            </View>
                        </View>
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    bluebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: Color.blue,
        marginRight: 500,
        transform: [{ translateY: -150}],
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderRadius: 4,
        padding: 10,
        backgroundColor: Color.gray,
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 30,
        marginBottom: 20,
        transform: [{ translateY: 130}],
    },
    inputs: {
        left: 50,
        width: 300,
        marginTop: -40,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    login: {
        borderWidth: 3,
        borderColor: Color.gray,
        borderRadius: 5,
        backgroundColor: Color.gray,
        marginRight: 10,
    },
    create: {
        borderWidth: 3,
        borderColor: Color.gray,
        borderRadius: 5,
        backgroundColor: Color.gray,
        marginLeft: 10,
    },

});
