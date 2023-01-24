import React from 'react';
import { ImageBackground, View, SafeAreaView, StyleSheet, Button, Alert, Text } from 'react-native';
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
        <View style={styles.mainScreenView}>
            <FlatGrid
                itemDimension={20}
                maxItemsPerRow={7}
                spacing={10}
                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}
                renderItem={({ item }) => (
                    <View style={styles.calendarDayBox}>
                        <Text>{item}</Text>
                    </View>
                    )}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mainScreenView: {
        top: 25,
    },
    calendarDayBox: {
        width: 40,
        height: 40,
        backgroundColor: '#ADD8E6',
    }
})

export default WelcomeScreen;

