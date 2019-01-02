import React from 'react';
import {StyleSheet, View, Image, Text } from 'react-native';

import {
    VictoryChart,
    VictoryLine,
    VictoryScatter,
    VictoryTheme,
} from 'victory-native';

const bp = require('../Images/ic_xueya.png');
const shape = require('../Images/Shape.png');

export default class BloodPressure extends React.Component {
    render() {
        return <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.titleIconContainer}>
                    <Image source={bp} style={[styles.bloodPressureIcon, {marginLeft: 20}]}/>
                    <Text style={[styles.bloodPressureText, {marginLeft: 5}]}>血压数据</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailText}>详细数据</Text>
                    <Image source={shape} style={styles.navigationArrow}/>
                </View>
            </View>
            <View>
                <VictoryChart
                    theme={VictoryTheme.material}
                    style={{
                        parent: {
                            border: "1px solid #ccc"
                        },
                        data: {
                            fill: "#c43a31", fillOpacity: 0.6, stroke: "#c43a31", strokeWidth: 3
                        },
                        labels: {
                            fontSize: 15, fill: "#c43a31", padding: 15
                        }
                    }}
                >
                    <VictoryLine
                        style={{
                            data: { stroke: "#54ce06" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                            { x: '12.1', y: 100, symbol: 'triangleUp' },
                            { x: '12.2', y: 35, symbol: 'triangleUp'  },
                            { x: '12.3', y: 75, symbol: 'triangleUp'  },
                            { x: '12.4', y: 105, symbol: 'triangleUp'  },
                            { x: '12.5', y: 140, symbol: 'triangleUp'  },
                            { x: '12.6', y: 90, symbol: 'triangleUp'  },
                            { x: '12.7', y: 10, symbol: 'triangleUp'  },
                        ]}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#e00001" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                            { x: '12.1', y: 88, symbol: 'triangleUp' },
                            { x: '12.2', y: 45, symbol: 'triangleUp' },
                            { x: '12.3', y: 120, symbol: 'triangleUp' },
                            { x: '12.4', y: 75, symbol: 'triangleUp'  },
                            { x: '12.5', y: 20, symbol: 'triangleUp'  },
                            { x: '12.6', y: 120, symbol: 'triangleUp'  },
                            { x: '12.7', y: 140, symbol: 'triangleUp'  },
                        ]}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#ff9102" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                            { x: '12.1', y: 188, symbol: "square", size: 7 },
                            { x: '12.2', y: 145, symbol: "square", size: 7 },
                            { x: '12.3', y: 20, symbol: "square", size: 7 },
                            { x: '12.4', y: 75, symbol: "square", size: 7 },
                            { x: '12.5', y: 210, symbol: "square", size: 7 },
                            { x: '12.6', y: 140, symbol: "square", size: 7 },
                            { x: '12.7', y: 140, symbol: "square", size: 7 },
                        ]}
                    />
                    <VictoryScatter
                        style={{ data: { fill: "#54ce06" } }}
                        size={7}
                        data={[
                            { x: '12.1', y: 100, symbol: 'triangleUp' },
                            { x: '12.2', y: 35, symbol: 'triangleUp'  },
                            { x: '12.3', y: 75, symbol: 'triangleUp'  },
                            { x: '12.4', y: 105, symbol: 'triangleUp'  },
                            { x: '12.5', y: 140, symbol: 'triangleUp'  },
                            { x: '12.6', y: 90, symbol: 'triangleUp'  },
                            { x: '12.7', y: 10, symbol: 'triangleUp'  },
                        ]}
                    />
                    <VictoryScatter
                        style={{ data: { fill: "#e00001" } }}
                        size={7}
                        data={[
                            { x: '12.1', y: 88, symbol: 'circle' },
                            { x: '12.2', y: 45, symbol: 'circle' },
                            { x: '12.3', y: 120, symbol: 'circle' },
                            { x: '12.4', y: 75, symbol: 'circle'  },
                            { x: '12.5', y: 20, symbol: 'circle'  },
                            { x: '12.6', y: 120, symbol: 'circle'  },
                            { x: '12.7', y: 140, symbol: 'circle'  },
                        ]}
                    />
                    <VictoryScatter
                        style={{ data: { fill: "#ff9102" } }}
                        size={7}
                        data={[
                            { x: '12.1', y: 188, symbol: "square", size: 7 },
                            { x: '12.2', y: 145, symbol: "square", size: 7 },
                            { x: '12.3', y: 20, symbol: "square", size: 7 },
                            { x: '12.4', y: 75, symbol: "square", size: 7 },
                            { x: '12.5', y: 210, symbol: "square", size: 7 },
                            { x: '12.6', y: 140, symbol: "square", size: 7 },
                            { x: '12.7', y: 140, symbol: "square", size: 7 },
                        ]}
                    />

                </VictoryChart>
            </View>
            <View style={styles.typeContainer}>
                <Text style={styles.typeText}>舒张压</Text>
                <Text style={styles.typeText}>收缩压</Text>
                <Text style={styles.typeText}>心率</Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    titleContainer: {
        marginTop: 40.0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 20,
        // backgroundColor: 'red',
    },
    titleIconContainer: {
        flex: 1,
        width: 85,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    bloodPressureText: {
        color: 'black',

    },
    bloodPressureIcon: {
        width: 20,
        height: 20,
    },
    detailContainer: {
        flex: 1,
        width: 64,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        // backgroundColor: 'red',
    },
    detailText: {
        color: '#007AFE',
        fontSize: 12,
        // height: 20,
        marginRight: 9,
    },
    navigationArrow: {
        width: 7,
        height: 12,
        marginRight: 13,
    },
    typeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    typeText: {
        marginLeft: 10,
    }
});
