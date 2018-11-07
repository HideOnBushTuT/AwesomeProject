import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import * as Actions from './../Actions';

function Counter({ caption, onIncrement, onDecrement, value }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text>{caption} value: {value}</Text>
            <Text onPress={onIncrement}>   +   </Text>
            <Text onPress={onDecrement}>   -   </Text>
        </View>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        value: state[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(ownProps.caption));
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps.caption));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);