import React from 'react'
import { View, Text, requireNativeComponent, ScrollView } from 'react-native'
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
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <RNTScrollView
                style={{ backgroundColor: 'orange', width: 300, height: 500, justifyContent: 'center', alignItems: 'center' }}
                onScrolling={this._onScroll}
                showsVerticalScrollIndicator={true}
                scrollEnabled={true}
            >
                {/* <View style={{ width: 300, eight: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}> */}
                    {/* <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text> */}
                    <ScrollView style={{ width: 100, height: 1600, backgroundColor: 'red', marginTop: 100 }}>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                        <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                    </ScrollView>
                {/* </View> */}
            </RNTScrollView>
        </View>)
    }
}