import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/beachbackground.png")}
        >
            <View style={styles.loginButton}>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5f65'
    }
})

export default WelcomeScreen;

