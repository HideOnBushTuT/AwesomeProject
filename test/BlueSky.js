import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, ProgressViewIOS } from 'react-native';

import { Actions } from 'react-native-router-flux'; 

import Logo from '../images/reno.png';

export default class BlueSky extends Component {
    render() {
        return (
            // <View style={{flex: 1, flexDirection: 'column', paddingTop: 64, alignItems: 'stretch'}}>
            //     <View style={{width: 50, height: 150, backgroundColor: 'powderblue', flexDirection: 'row', alignItem: 'stretch'}} >
            //         <View style={{backgroundColor: 'skyblue'}}/>
            //     </View>
            //     <View style={{height: 150, backgroundColor: 'skyblue'}} />
            //     <View style={{height: 150, backgroundColor: 'steelblue'}} />
            // </View>
            // <View style={{ flexDirection: 'column', justifyContent: 'space-around', flexWrap: 'wrap', backgroundColor: "darkgray", marginTop: 64 }}>
            //     <View style={{ width: 10, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
            //         <Text style={{ fontSize: 16 }}>1</Text>
            //     </View>
            //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, backgroundColor: "darkcyan", margin: 5 }}>
            //         <Text style={{ fontSize: 16 }}>2.1</Text>
            //         <Text style={{ fontSize: 16 }}>2.2</Text>
            //         <Text style={{ fontSize: 16 }}>2.3</Text>
            //         <Text style={{ fontSize: 16 }}>2.4</Text>
            //     </View>
            //     <View style={{ width: 10, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
            //         <Text style={{ fontSize: 16 }}>3</Text>
            //     </View>
            //     <View style={{ width: 10, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
            //         <Text style={{ fontSize: 16 }}>4</Text>
            //     </View>
            //     <View style={{ width: 10, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
            //         <Text style={{ fontSize: 16 }}>5</Text>
            //     </View>
            // </View>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.h1}>AlligatorChef</Text>
                    <Text style={styles.h2}>Providing cajun bacon recipes since 1987.</Text>
                </View>
                <View styles={styles.middleContainer}>
                    <Image
                        source={Logo}
                        style={styles.image}
                    />
                </View>
                <ProgressViewIOS number={1} />
                <View style={styles.bottomContainer}>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="LET'S START!"
                            style={styles.button}
                            onPress={Actions.webviewbasic}
                            color="#fff"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        alignItems: 'center',
        width: '100%',
    },
    h1: {
        color: '#008F68',
        fontSize: 40,
    },
    h2: {
        color: '#FAE042',
        fontSize: 18,
        marginTop: 8,
    },
    image: {
        width: 300,
        height: 260,
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
    },
    topContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        width: '90%',
        margin: 20,
        padding: 10,
    },
});
