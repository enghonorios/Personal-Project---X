import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native'; // Importe StyleSheet aqui

export default function App() {
    return ( <
        View style = { styles.container } > ; <
        Text > Olá SevenCoders - DevNubi!! < /Text>; <
        StatusBar style = "auto" / > ; <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});