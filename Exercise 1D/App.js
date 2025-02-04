import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Barometer } from 'expo-sensors';


export default function App() {
    const [{ pressure, relativeAltitude }, setBarometerData] = useState({ pressure: 0, relativeAltitude: 0 });

    useEffect(() => {
        Barometer.setUpdateInterval(100);
        const subscription = Barometer.addListener(setBarometerData);
        return () => subscription.remove();
    }, []);

    return (
        <View>
            <StatusBar />
            <Text>Barometer Readings:</Text>
            <Text>Pressure: {pressure} hPa</Text>
            <Text>Relative Altitude: {relativeAltitude} m</Text>
        </View>
    );
}
