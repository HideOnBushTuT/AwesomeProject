import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';

export default class FetchExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function() {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if(this.state.isLoading) {
            return (
                <View style = { styles.container }>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <View style = { styles.container }>
                <FlatList
                    data = { this.state.dataSource }
                    renderItem = { ({item}) => <Text style = { styles.item }>{ item.title }, { item.releaseYear }</Text>}
                    keyExtractor = { ({id}, index) => id }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 44,
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 44,
    }
});