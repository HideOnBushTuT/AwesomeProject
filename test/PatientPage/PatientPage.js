import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Svg from './Svg';
import svgs from './svgs/svgs';

import BloodPressure from './BloodPressurePage/BloodPressure';
import BloodSugar from './BloodSuger/BloodSugar';

export default class PatientPage extends React.Component {
    render() {
        return <View style={{}}>
            {/*<ScrollView scrollEnabled={false} pagingEnabled={false}>*/}
                {/*<BloodPressure/>*/}
                <BloodSugar/>
            {/*</ScrollView>*/}
        </View>
    }
}

