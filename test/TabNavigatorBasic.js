import React from 'react';
import { View, Text } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import BlueSky from './BlueSky';
import SectionListTest from './SectionListTest';

export default class TabBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: ''
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'bluesky'}
                    title="bluesky"
                    badgeText="2"
                    onPress={() => this.setState({ selectedTab: 'bluesky' })}
                >
                    <BlueSky />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'SectionListTest'}
                    title="SectionListTest"
                    onPress={() => this.setState({ selectedTab: 'SectionListTest' })}
                >
                    <SectionListTest />
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}