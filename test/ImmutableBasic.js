import React from 'react';
import {View, Text} from 'react-native';

import {List,} from 'immutable';

export default class ImmutableBasic extends React.Component {
    constructor() {
        super();
        const list1 = List([1, 2, 3, 4,]);
        this.state = {
            list1: list1,
            list2: list1,
        }
    }

    render() {
        return <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
            <Text>list1: {this.state.list1}</Text>
            <Text>list2: {this.state.list2}</Text>
            <Text onPress={() => this._onChangeListData()}>Change List2</Text>
        </View>
    }

    _onChangeListData() {
        this.setState({list2: this.state.list2.push(Math.random())});
    }
}