import React from 'react';
import { View, Text } from 'react-native';

import store from './Store';
import * as Actions from './Actions';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.getOwnState = this.getOwnState.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState();
    }

    shouldComponentUpdate(nextProps, nextState) {
        // if(nextProps.caption != this.props.caption || nextState.value == this.state.value) {
        //     return false
        // }
        // return true
        return (nextProps.caption === this.props.caption) && (nextState.value !== this.state.value)
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption],
        };
    }

    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        this.unsubscribe(this.onChange);
    }

    render() {
        const value = this.state.value;
        const { caption } = this.props;

        return (
            <View>
                <Text onPress={this.onIncrement}>+</Text>
                <Text onPress={this.onDecrement}>-</Text>
                <Text>{caption} count: {this.state.value}</Text>
            </View>
        )
    }
}