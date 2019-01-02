import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SectionList,
    Image,
    ImageBackground,
} from 'react-native';

import { ProgressView } from '../ProgressView';

const bp = require('../Images/ic_xueya.png');
const shape = require('../Images/Shape.png');
const sugarHigh = require('./Images/pg_bloodsugar_high.png');
const sugarNormal = require('./Images/pg_bloodsugar_normal.png');
const sugarLow = require('./Images/pg_bloodsugar_low.png');
const sugarHighImage = require('./Images/pg_high.png');
const sugarNormalImage = require('./Images/pg_normal.png');
const sugarLowImage = require('./Images/pg_low.png');

// const DinningStatus = ['空腹', '早餐后', '午餐前', '午餐后', '晚餐前', '晚餐后', '睡前', '凌晨']

export default class BloodSugar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data1: [
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title1', data: [['-', 'item2', '-', 'item2', '-', 'item2', '-', '-',],]},
                {title: 'Title2', data: [['-', '-', 'item1', '-', 'item1', 'item2', '-', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title1', data: [['-', 'item2', '-', 'item2', '-', 'item2', '-', '-',],]},
                {title: 'Title2', data: [['-', '-', 'item1', '-', 'item1', 'item2', '-', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title1', data: [['-', 'item2', '-', 'item2', '-', 'item2', '-', '-',],]},
                {title: 'Title2', data: [['-', '-', 'item1', '-', 'item1', 'item2', '-', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title1', data: [['-', 'item2', '-', 'item2', '-', 'item2', '-', '-',],]},
                {title: 'Title2', data: [['-', '-', 'item1', '-', 'item1', 'item2', '-', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title1', data: [['-', 'item2', '-', 'item2', '-', 'item2', '-', '-',],]},
                {title: 'Title2', data: [['-', '-', 'item1', '-', 'item1', 'item2', '-', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
                {title: 'Title1', data: [['-', 'item2', '-', 'item2', '-', 'item2', '-', '-',],]},
                {title: 'Title2', data: [['-', '-', 'item1', '-', 'item1', 'item2', '-', '-',],]},
                {title: 'Title3', data: [['item1', '-', '-', '-', '-', 'item2', 'item1', '-',],]},
            ]
        }
    }
    render() {
        return <View style={{marginTop: 64, alignItems: 'stretch'}}>
            {/*<ProgressView show={true} />*/}
            {this.renderTitle()}
            {this.renderSugarChart()}
            {this.renderBloodSugarTitle()}
            {this.renderHeaderTitle()}
            <SectionList
                // contentInset={{top:0,left:0,bottom:539,right:0}}
                refreshing={false}
                scrollEnabled={true}
                // scrollsToTop={true}
                onRefresh={(info) => alert('onRefresh: nothing to refresh :P')}
                keyExtractor={(item, index) => index + item + Math.random()}
                sections={this.state.data1}
                // renderSectionHeader={this.renderSectionHeader.bind(this)}
                // onEndReachedThreshold={0.1}
                // onEndReached={(info) => alert('onRefresh: nothing to refresh :Pppppppppppp')}
                // stickySectionHeadersEnabled={true}
                renderItem={this.renderItem.bind(this)}
            />
        </View>
    }

    renderTitle() {
        return <View style={styles.titleContainer}>
            <View style={styles.titleIconContainer}>
                <Image source={bp} style={[styles.bloodPressureIcon, {marginLeft: 20}]}/>
                <Text style={[styles.bloodPressureText, {marginLeft: 5}]}>血压数据</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText}>8月27日-9月24日</Text>
            </View>
        </View>
    }

    renderBloodSugarTitle() {
        return <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 7}}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={sugarHigh} style={{width: 16, height: 20}}/>
                <Text style={{marginLeft: 4}}>偏高</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={sugarNormal} style={{width: 16, height: 20}}/>
                <Text style={{marginLeft: 4}}>正常</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={sugarLow} style={{width: 16, height: 20}}/>
                <Text style={{marginLeft: 4}}>偏低</Text>
            </View>
        </View>
    }

    renderSugarChart() {
        return <View
            style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10}}>
            <ImageBackground source={sugarHighImage} style={styles.chartImageBackground}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Text style={[styles.chartLargeText, {color: '#D0021B'}]}>2</Text>
                    <Text style={styles.chartSmallText}>次</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={sugarNormalImage} style={styles.chartImageBackground}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Text style={[styles.chartLargeText, {color: '#999999'}]}>1</Text>
                    <Text style={styles.chartSmallText}>次</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={sugarLowImage} style={styles.chartImageBackground}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Text style={[styles.chartLargeText, {color: '#7ED321'}]}>6</Text>
                    <Text style={styles.chartSmallText}>次</Text>
                </View>
            </ImageBackground>
        </View>
    }

    renderSectionHeader({section}) {
        return <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 12}}>12/4</Text>
        </View>
    }

    renderItem({item, index}) {
        return <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            borderColor: '#F1F1F1',
            borderWidth: 1
        }}>
            <View style={{flexDirection: 'row', flex: 5}}>
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={{fontSize: 12}}>12月</Text>
                    <Text style={{fontSize: 16}}>12</Text>
                </View>
                <View style={styles.contentCellSeparatorLine}/>
            </View>
                {
                    item.map((title, index) => {
                        if (index === 7) {
                            return <View style={{
                                flex: 5,
                                flexDirection: 'row',
                                // borderWidth: 1,
                                // borderColor: '#F1F1F1',
                                marginLeft: 0,
                                width: 35,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text color='#F1F1F1'>{title}</Text></View>
                                <View style={styles.contentCellSeparatorLine}/>
                            </View>
                        } else {
                            return <View style={{
                                flex: 4,
                                flexDirection: 'row',
                                // borderWidth: 1,
                                // borderColor: '#F1F1F1',
                                marginLeft: 0,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text color='#F1F1F1'>{title}</Text></View>
                                <View style={styles.contentCellSeparatorLine}/>
                            </View>
                        }
                    })
                }
        </View>
    }

    renderHeaderTitle() {
        return <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'stretch',
            backgroundColor: '#F1F1F1',
            marginTop: 15
        }}>
            <View style={[styles.headerTitleContent, {flex: 5}]}><Text>日期</Text></View>
            <View style={styles.headerTitleSeparatorLine}/>
            <View style={[styles.headerTitleContent, {flex: 4}]}><Text>凌晨</Text></View>
            <View style={styles.headerTitleSeparatorLine}/>
            <View style={styles.headerTitleDay}>
                <View style={styles.headerTitleSmallContent}>
                    <Text>早餐</Text>
                </View>
                <View style={styles.headerTitleRowSeparatorLine}/>
                <View style={styles.headerTitleDayTime}>
                    <View style={styles.headerTitleSmallContent}>
                        <Text>空腹</Text>
                    </View>
                    <View style={styles.headerTitleSeparatorLine}/>
                    <View style={styles.headerTitleSmallContent}>
                        <Text>后</Text>
                    </View>
                </View>
            </View>
            <View style={styles.headerTitleSeparatorLine}/>
            <View style={styles.headerTitleDay}>
                <View style={styles.headerTitleSmallContent}>
                    <Text>午餐</Text>
                </View>
                <View style={styles.headerTitleRowSeparatorLine}/>
                <View style={styles.headerTitleDayTime}>
                    <View style={styles.headerTitleSmallContent}>
                        <Text>前</Text>
                    </View>
                    <View style={styles.headerTitleSeparatorLine}/>
                    <View style={styles.headerTitleSmallContent}>
                        <Text>后</Text>
                    </View>
                </View>
            </View>
            <View style={styles.headerTitleSeparatorLine}/>
            <View style={styles.headerTitleDay}>
                <View style={styles.headerTitleSmallContent}>
                    <Text>晚餐</Text>
                </View>
                <View style={styles.headerTitleRowSeparatorLine}/>
                <View style={styles.headerTitleDayTime}>
                    <View style={styles.headerTitleSmallContent}>
                        <Text>前</Text>
                    </View>
                    <View style={styles.headerTitleSeparatorLine}/>
                    <View style={styles.headerTitleSmallContent}>
                        <Text>后</Text>
                    </View>
                </View>
            </View>
            <View style={styles.headerTitleSeparatorLine}/>
            <View style={[styles.headerTitleContent, {flex: 5}]}><Text>睡前</Text></View>
        </View>
    }


}

const LabelView = (props) => {
    return (
        <View style={{
            height: 20,
            borderColor: props.color,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 8
        }}>
            <Text style={[{color: props.color, fontSize: 12}]}>{props.text}</Text>
        </View>
    )
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
        // color: '#007AFE',
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
    },
    chartLargeText: {
        fontSize: 25,
    },
    chartSmallText: {
        fontSize: 12,
        color: '#2A2A2A',
    },
    chartImageBackground: {
        width: 76,
        height: 76,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitleDay: {
        flexDirection: 'column',
        // justifyContent: ''
        alignItems: 'center',
        flex: 8,
    },
    headerTitleDayTime: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitleSeparatorLine: {
        backgroundColor: '#FFFFFF',
        width: 2,
        height: '100%'
    },
    headerTitleRowSeparatorLine: {
        backgroundColor: '#FFFFFF',
        height: 2,
        width: '100%'
    },
    headerTitleContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitleSmallContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentCellSeparatorLine: {
      backgroundColor: '#F1F1F1',
      width: 1,
      height: '100%',
    },
});
