import React from 'react';
import {SwipeableFlatList, View, Text, StyleSheet, TouchableHighlight,} from 'react-native';


export default class SwipeableFlatListBasic extends React.Component {
    constructor() {
        super();
        this.state = {
             data: [
                {
                    key: 'like',
                    data: 'Like!',
                },
                {
                    key: 'heart',
                    data: 'Heart!',
                },
                {
                    key: 'party',
                    data: 'Party!',
                },
            ],
            num: 10,
        }
    }
    render() {
        return (
            <View style={{marginTop: 40}}>
                <SwipeableFlatList
                    bounceFirstRowOnMount={false}
                    maxSwipeDistance={160}
                    renderQuickActions={this._renderQuickActions.bind(this)}
                    renderItem={this._renderItem.bind(this)}
                    data={this.state.data}
                />
            </View>
        );
    }

    _renderItem({item}) {
        return (
            <View style={styles.row}>
                <Text style={styles.rowDataText} numberOfLines={1}>{item.data}</Text>
            </View>
        );
    }

    _renderQuickActions({item}) {
        return (
            <View style={styles.actionsContainer}>
                <TouchableHighlight
                    style={styles.actionButton}
                    onPress={() => {
                        alert(
                            'You could do something with this edit action!',
                        );
                    }}
                >
                    <Text style={styles.actionButtonText}>edit</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.actionButton, styles.actionButtonDestructive]}
                    onPress={() => this._removeItem()}
                >
                    <Text style={styles.actionButtonText}>remove</Text>
                </TouchableHighlight>
            </View>
        );
    }

    _removeItem() {
        let newData = this.state.data;
        let newObject = { key: "newkey" + Math.random(), data: 'new data' + Math.random() }
        newData.push(newObject);
        this.setState({ data: newData});
        console.log(this.state.num);
    }
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    rowIcon: {
        width: 64,
        height: 64,
        marginRight: 20,
    },
    rowData: {
        flex: 1,
    },
    rowDataText: {
        fontSize: 24,
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    actionButton: {
        padding: 10,
        width: 80,
        backgroundColor: '#999999',
    },
    actionButtonDestructive: {
        backgroundColor: '#FF0000',
    },
    actionButtonText: {
        textAlign: 'center',
    },
});
