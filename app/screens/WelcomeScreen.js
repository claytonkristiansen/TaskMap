import React from 'react';
import { ImageBackground, View, SafeAreaView, StyleSheet, Button, Alert, Text, Dimensions} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const styles = StyleSheet.create({
    calendarGridView: {
        alignItems: "center",
        width: 350,
    },
    calendarRowView: {
        flexDirection: "row",
        marginBottom: 5,
        alignItems: "center",
    },
    calendarCol: {
        flex: 1,
        alignItems: 'center'
    },
    welcomeScreen: {
        top: 50,
        alignItems: "center",
    },
    calendarBox: {
        width: 40,
        height: 40,
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    calendarCircle: {
    }
})


const Col = ({children}) => {
    return  (
      <View style={styles.calendarCol}>{children}</View>
    )
}

const Row = ({children}) => {
    return (
        <View style={styles.calendarRowView}>{children}</View>
    )
}

const CalendarBox = () => {
    return (
        <View style={styles.calendarBox}>
            <View width={10} height={10} borderRadius={5} backgroundColor={'blue'}></View>
        </View>
    )
}

function WelcomeScreen(props) {

    const handlePress = () => console.log("handlePress called")
    
    return (
        <View style={styles.welcomeScreen}>
            <View style={styles.calendarGridView}>
                <Row>
                    <Col><CalendarBox></CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                </Row>
                <Row>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                </Row>
                <Row>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                </Row>
                <Row>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                </Row>
                <Row>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col><CalendarBox>Hello</CalendarBox></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </View>
        </View>
    );
}


export default WelcomeScreen;

