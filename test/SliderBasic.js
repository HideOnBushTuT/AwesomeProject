import React from 'react';
import { WebView, StyleSheet, View } from 'react-native';

export default class WebViewBasic extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://github.com/facebook/react-native' }}
                style={{ marginTop: 0 }}
            />
        );
    }
}