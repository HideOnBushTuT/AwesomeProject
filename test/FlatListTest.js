import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default class FlatListBasic extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'App'},
                        {key: 'BlueSky'},
                        {key: 'ButtonTest'},
                        {key: 'PizzaTranslator'},
                        {key: 'scrollViewTest'},
                        {key: 'Touchables'},
                        {key: 'Touchablessss'},
                    ]}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._separator}
                    ListEmptyComponent={this._itemSeparator}
                />
            </View>
        );
    }

    _renderItem = ({item}) => {
        let color = item.index % 2 === 0 ? 'red' : 'orange';
        return (
            <View style={{backgroundColor: color}}>
                <Text style={styles.item} onPress={() => alert(item.key)}>{item.key}</Text>
            </View>
        )
    }


    _itemSeparator = () => {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{alignSelf: 'center'}}>Hello World</Text></View>
    }

    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 44,
        justifyContent: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});