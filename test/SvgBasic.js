import React from 'react';
import {View, Image, Text } from 'react-native';

import { Svg, Circle, Symbol, Use, Rect } from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';

const high = require('./Images/pm_high.svg');

export default class SvgBasic extends React.Component {
    render() {
        return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'orange'}}>
            {/*<Image source={high} style={{width: 100, height: 100}}/>*/}

            {/*<SvgUri width={200} height={200} source={high}/>*/}


        </View>
    }
}
