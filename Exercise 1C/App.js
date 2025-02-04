import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Magnetometer } from 'expo-sensors';


export default function App() {
    const [{ x, y, z }, setMagnetometerData] = useState({ x: 0, y: 0, z: 0 });

    useEffect(() => {
        Magnetometer.setUpdateInterval(100);
        const subscription = Magnetometer.addListener(setMagnetometerData);
        return () => subscription.remove();
    }, []);

    return (
        <View>
            <StatusBar />
            <Text>Magnetometer Readings:</Text>
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>
        </View>
    );
}
