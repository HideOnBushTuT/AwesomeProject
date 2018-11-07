import React from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import Store from '../Store';

import Counter from './Counter';
import Summary from './Summary';

export default class ControlPanel extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <View style={{ flex: 1, marginTop: 64, marginLeft: 20, marginRight: 20}}>
                    <Counter caption="first" />
                    <Counter caption="second" />
                    <Counter caption='third' />
                    <Summary />
                </View>
            </Provider>
        )
    }
}