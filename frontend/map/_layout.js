import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
    <Stack>
        <Stack.screen name ="index" options={{ title: 'Home'}} />
    </Stack>
};

export default Layout;