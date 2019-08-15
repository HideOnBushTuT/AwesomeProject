import React from 'react'
import { View, requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

var MapView = requireNativeComponent('RNTMap')

MapView.PropTypes = {
    zoomEnabled: PropTypes.bool,
    region: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        latitudeDelta: PropTypes.number.isRequired,
        longitudeDelta: PropTypes.number.isRequired,
    }),
    onRegionChnage: PropTypes.func.isRequired,
}

export default class TestCell extends React.Component {

    _onRegionChange = (event) => {
        console.log('event: ', event.nativeEvent)
    }

    render() {
        var region = {
            latitude: -37.48,
            longitude: 122.16,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        };
        return <View style={{ flex: 1 }}>
            <MapView
                region={region}
                zoomEnabled={true}
                style={{ flex: 1 }}
                onRegionChange={this._onRegionChange}
            />
        </View>
    }
}