import React from 'react';
import {AsyncStorage} from 'react-native';

import Storage from 'react-native-storage';

export default class ReactNativeStorageBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "UID": "",
        };

        let UID123_object = {
            name: 'Chris',
            age: 30,
            traits: {hair: 'brown', eyes: 'brown'},
        };
        let UID123_delta = {
            age: 31,
            traits: {eyes: 'blue', shoe_size: 10},
        };

        gloable.storage = new Storage({
            size: 1000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
        });
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {

    }
}