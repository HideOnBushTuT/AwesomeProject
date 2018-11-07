import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import * as Actions from '../Actions';

function Summary({ sum, }) {
    return (
        <View>
            <Text>sum: {sum}</Text>
        </View>
    )
}

function mapStateToProps(state) {
    let sum = 0;
    for (let key in state) {
        if (state.hasOwnProperty(key)) {
            sum += state[key];
        }
    }
    return {
        sum: sum
    }
}

export default connect(mapStateToProps)(Summary);