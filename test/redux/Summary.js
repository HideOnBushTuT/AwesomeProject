import React from 'react';
import {View, Text} from 'react-native';

import store from './Store';

export default class Summary extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = Summary.getOwnState();
    }

    static getOwnState() {
        const state = store.getState();
        let sum = 0;
        for (let key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }
        return {sum: sum}
    }

    onChange() {
        this.setState(Summary.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }


    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        return (
            <View style={{marginTop: 10, marginLeft: 20, marginRight: 20}}>
                <Text>{this.state.sum}</Text>
            </View>
        )
    }

}