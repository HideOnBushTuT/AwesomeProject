import React from 'react';
import {View, StyleSheet, ScrollView, Platform } from "react-native";
import {
    VictoryArea,
    VictoryAxis,
    VictoryBar,
    VictoryCandlestick,
    VictoryChart, VictoryGroup,
    VictoryLabel,
    VictoryLine, VictoryScatter, VictoryStack,
    VictoryTheme, VictoryTooltip,
} from 'victory-native';

import { random, range } from 'lodash';


const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];

const candleData = [
    { x: 1, open: 9, close: 30, high: 56, low: 7 },
    { x: 2, open: 80, close: 40, high: 120, low: 10 },
    { x: 3, open: 50, close: 80, high: 90, low: 20 },
    { x: 4, open: 70, close: 22, high: 70, low: 5 },
    { x: 5, open: 20, close: 35, high: 50, low: 10 },
    { x: 6, open: 35, close: 30, high: 40, low: 3 },
    { x: 7, open: 30, close: 90, high: 95, low: 30 },
    { x: 8, open: 80, close: 81, high: 83, low: 75 }
];

class VictoryNativeBasic extends React.Component {
    render() {
        return <View style={styles.container}>
            <VictoryChart width={350} theme={VictoryTheme.material}>
                <VictoryBar data={data} x="quarter" y="earnings"/>
            </VictoryChart>
        </View>
    }
}

class VictoryNativeCustomChart extends React.Component {
    static navigationOptions = {
        headerTitle: "VictoryChart"
    };

    constructor(props) {
        super(props);
        this.state = {
            transitionData: this._getTransitionData(),
        };
    }

    componentDidMount() {
        setInterval(this.updateDemoData.bind(this), 3000);
    }

    updateDemoData() {
        this.setState({
            transitionData: this._getTransitionData()
        });
    }

    _getTransitionData = () => {
        const n = random(4, 10);
        return range(n).map(i => {
            return {
                x: i,
                y: random(2, 10)
            };
        });
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <VictoryChart>
                    {/*<VictoryBar />*/}
                    <VictoryLine />
                </VictoryChart>

                <VictoryChart>
                    <VictoryCandlestick data={candleData} />
                </VictoryChart>

                {/*<VictoryChart domain={{ x: [0, 4] }}>*/}
                    {/*<VictoryGroup*/}
                        {/*labels={["a", "b", "c"]}*/}
                        {/*offset={10}*/}
                        {/*colorScale={"qualitative"}*/}
                    {/*>*/}
                        {/*<VictoryBar*/}
                            {/*data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}*/}
                        {/*/>*/}
                        {/*<VictoryBar*/}
                            {/*data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}*/}
                        {/*/>*/}
                        {/*<VictoryBar*/}
                            {/*data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}*/}
                        {/*/>*/}
                    {/*</VictoryGroup>*/}
                {/*</VictoryChart>*/}

                {/*<VictoryChart>*/}
                    {/*<VictoryScatter*/}
                        {/*labelComponent={<VictoryTooltip/>}*/}
                        {/*data={[*/}
                            {/*{*/}
                                {/*x: 1,*/}
                                {/*y: 3,*/}
                                {/*fill: "red",*/}
                                {/*symbol: "plus",*/}
                                {/*size: 6,*/}
                                {/*label: "Red"*/}
                            {/*},*/}
                            {/*{*/}
                                {/*x: 2,*/}
                                {/*y: 5,*/}
                                {/*fill: "magenta",*/}
                                {/*size: 9,*/}
                                {/*opacity: 0.4,*/}
                                {/*label: "Magenta"*/}
                            {/*},*/}
                            {/*{*/}
                                {/*x: 3,*/}
                                {/*y: 4,*/}
                                {/*fill: "orange",*/}
                                {/*size: 5,*/}
                                {/*label: "Orange"*/}
                            {/*},*/}
                            {/*{*/}
                                {/*x: 4,*/}
                                {/*y: 2,*/}
                                {/*fill: "brown",*/}
                                {/*symbol: "square",*/}
                                {/*size: 6,*/}
                                {/*label: "Brown"*/}
                            {/*},*/}
                            {/*{*/}
                                {/*x: 5,*/}
                                {/*y: 5,*/}
                                {/*fill: "black",*/}
                                {/*symbol: "triangleUp",*/}
                                {/*size: 5,*/}
                                {/*label: "Black"*/}
                            {/*}*/}
                        {/*]}*/}
                    {/*/>*/}
                {/*</VictoryChart>*/}
                {/*<VictoryChart animate={{ duration: 2000 }}>*/}
                    {/*<VictoryArea*/}
                        {/*data={this.state.transitionData}*/}
                    {/*/>*/}
                {/*</VictoryChart>*/}
                {/*<VictoryChart animate={{ duration: 2000 }}>*/}
                    {/*<VictoryBar*/}
                        {/*labels={() => "Hi"}*/}
                        {/*data={this.state.transitionData}*/}
                        {/*style={{*/}
                            {/*data: {*/}
                                {/*fill: "tomato",*/}
                                {/*width: 12*/}
                            {/*}*/}
                        {/*}}*/}
                        {/*animate={{*/}
                            {/*onExit: {*/}
                                {/*duration: 500,*/}
                                {/*before: () => ({*/}
                                    {/*y: 0,*/}
                                    {/*fill: "orange",*/}
                                    {/*label: "BYE"*/}
                                {/*})*/}
                            {/*}*/}
                        {/*}}*/}
                    {/*/>*/}
                {/*</VictoryChart>*/}
                <VictoryChart
                    theme={VictoryTheme.grayscale}
                >
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 7 }
                        ]}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#afcccc" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                            { x: 1, y: 3 },
                            { x: 2, y: 4 },
                            { x: 3, y: 6 },
                            { x: 4, y: 7 },
                            { x: 6, y: 109 }
                        ]}
                    />
                </VictoryChart>

                <VictoryChart>
                    <VictoryStack>
                        <VictoryArea
                            data={[
                                { x: "a", y: 2 },
                                { x: "b", y: 3 },
                                { x: "c", y: 5 },
                                { x: "d", y: 4 },
                                { x: "e", y: 7 }
                            ]}
                        />
                        <VictoryArea
                            data={[
                                { x: "a", y: 1 },
                                { x: "b", y: 4 },
                                { x: "c", y: 5 },
                                { x: "d", y: 7 },
                                { x: "e", y: 5 }
                            ]}
                        />
                        <VictoryArea
                            data={[
                                { x: "a", y: 3 },
                                { x: "b", y: 2 },
                                { x: "c", y: 6 },
                                { x: "d", y: 2 },
                                { x: "e", y: 6 }
                            ]}
                        />
                        <VictoryArea
                            data={[
                                { x: "a", y: 2 },
                                { x: "b", y: 3 },
                                { x: "c", y: 3 },
                                { x: "d", y: 4 },
                                { x: "e", y: 7 }
                            ]}
                        />
                    </VictoryStack>
                </VictoryChart>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    monospace: {
        fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace"
    },
    contentContainer: {
        alignItems: "center"
    },
    header: {
        fontWeight: "600",
        padding: 15,
        fontSize: 18
    }
});

export default VictoryNativeCustomChart;
