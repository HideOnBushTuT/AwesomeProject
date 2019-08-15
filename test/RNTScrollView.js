import React from 'react'
import { View, Text, requireNativeComponent } from 'react-native'
import PropTypes from 'prop-types'

var RNTScrollView = requireNativeComponent('RNTScrollView')

RNTScrollView.PropTypes = {
    onScrolling: PropTypes.func.isRequired,
    showsVerticalScrollIndicator: PropTypes.bool.isRequired,
    scrollEnabled: PropTypes.bool.isRequired,
}

export default class TestScrollView extends React.Component {
    _onScroll = (event) => {
        console.log('scrollview contentoffset:', event.nativeEvent)
    }

    render() {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
            <RNTScrollView
                style={{flex: 1, backgroundColor: 'orange', width: 200, height: 500, justifyContent: 'center', alignItems: 'center' }}
                onScrolling={this._onScroll}
                showsVerticalScrollIndicator={true}
                scrollEnabled={true}
            >
                <View style={{ width: 100, height: 2000, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
                        <Text style={{ marginTop: 50 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 50 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 50 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 50 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 50 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 50 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 50 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 50 }}>This is a scrollview</Text>
                </View>
            </RNTScrollView>
        </View>)
    }
}