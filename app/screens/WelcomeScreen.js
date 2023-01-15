import React from 'react';
import { ImageBackground, View, StyleSheet, Button, Alert, Text } from 'react-native';

function WelcomeScreen(props) {

    const handlePress = () => console.log("handlePress called")

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/beachbackground.png")}
        >
            <View style={styles.loginButtonView}>
                <Text onPress={handlePress}>Hello</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButtonView: {
        width: 180,
        height: 70,
        //backgroundColor: '#fc5f65'
    },
})

export default WelcomeScreen;

