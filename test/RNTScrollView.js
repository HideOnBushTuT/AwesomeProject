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
    constructor(props) {
        super(props)
        this.state = {
            scrollEnabled: true,
            subScrollEnabled: false,
        }
    }


    _onScroll = (event) => {
        let { contentOffSet } = event.nativeEvent
        console.log('scrollview contentoffset:', event.nativeEvent)
        if (contentOffSet >= 100) {
            this.setState({ scrollEnabled: false, subScrollEnabled: true })
        }
    }

    _onSubScroll = (event) => {
        let { contentOffSet } = event.nativeEvent
        console.log('subscrollview contentoffset:', event.nativeEvent)
        if (contentOffSet <= 0) {
            this.setState({ scrollEnabled: true, subScrollEnabled: false })
        }
    }

    render() {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <RNTScrollView
                style={{ backgroundColor: 'orange', width: 300, height: 500, justifyContent: 'center', alignItems: 'center' }}
                contentSize={{ width: 300, height: 600 }}
                onScrolling={this._onScroll}
                showsVerticalScrollIndicator={true}
                scrollEnabled={this.state.scrollEnabled}
            >
                <RNTScrollView
                    style={{ width: 300, height: 500, backgroundColor: 'red', marginTop: 100 }}
                    scrollEnabled={this.state.subScrollEnabled}
                    onScrolling={this._onSubScroll}
                    contentSize={{ width: 300, height: 1000 }}
                >
                    <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                    <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                    <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                    <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                    <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                    <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                    <Text style={{ marginTop: 200 }}>This is a scrollview</Text>
                </RNTScrollView>
                {/* </View> */}
            </RNTScrollView>
        </View>)
    }
}