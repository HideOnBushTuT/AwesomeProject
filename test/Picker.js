import React from 'react';
import { Picker, StyleSheet, View, Text } from 'react-native';

export default class PickerBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'OC',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={this.state.language}
                    // style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
                    enabled={false}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="Objective-C" value="OC"/>
                    <Picker.Item label="Swift" value="Swift"/>
                    <Picker.Item label="Kotlin" value="Kotlin"/>
                </Picker>
                <Text>{this.state.language}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 44,
    }
});