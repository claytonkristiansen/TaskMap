import React from 'react';
import { ImageBackground, View, StyleSheet, Button, Alert, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

function WelcomeScreen(props) {

    const handlePress = () => console.log("handlePress called")

    return (
        // <ImageBackground
        //     style={styles.background}
        //     source={require("../assets/beachbackground.png")}
        // >
            
        //     <View style={styles.loginButtonView}>
        //         <Text onPress={handlePress}>Hello</Text>
        //     </View>
        // </ImageBackground>
        <FlatGrid
                itemDimension={200}
                spacing={10}
                data={[1,2,3,4,5,"Hello World"]}
                renderItem={({ item }) => (
                    <View style={styles.gridView}>
                        <Text>{item}</Text>
                    </View>
                    )}
                />
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
    gridView: {
        backgroundColor: '#500000'
    }
})

export default WelcomeScreen;

