import { View, TextInput, StyleSheet, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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
            console.log(response);
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
            // await updateProfile(auth.currentUser, { displayName: username }); 
            console.log(response);
            // alert('Check your email!')
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
                <TextInput value={username} style={styles.input} placeholder='Username' onChangeText={setUsername} />
                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' 
                onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' 
                onChangeText={(text) => setPassword(text)}></TextInput>

                { loading ? ( 
                    <ActivityIndicator size="large" color='#0000ff' />
                ) : ( 
                    <>
                        <Button title="Login" onPress={signIn}/> 
                        <Button title="Create account" onPress={signUp}/> 
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
})