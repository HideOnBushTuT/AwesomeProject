import React from 'react';
import { View, Text } from 'react-native';

import Counter from './Counter';
import Summary from './Summary';

export default class RootRedux extends React.Component {
    render() {
        return (
            <View style={{margin: 64}}>
                <Counter caption="first" />
                <Counter caption="second" />
                <Counter caption="third" />
                <Summary />
            </View>
        )
    }
}