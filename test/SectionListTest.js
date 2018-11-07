import React, { Component } from 'react';
import { StyleSheet, SectionList, View, Text } from 'react-native';

export default class SectionListTest extends Component {
    render() {
        const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>
        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={({item, index, section}) => <Text style={styles.item} key={index}>{item}</Text>}
                    renderSectionHeader={({section: {title}}) => (<Text style={styles.sectionHeader}>{title}</Text>)}
                    // sections={[
                    //     {title: 'Title1', data: ['item1', 'item2']},
                    //     {title: 'Title2', data: ['item3', 'item4']},
                    //     {title: 'Title3', data: ['item5', 'item6']},
                    // ]}
                    sections={[
                        { title: 'Title1', data: ['item1', 'item2'], renderItem: overrideRenderItem },
                        { title: 'Title2', data: ['item3', 'item4'] },
                        { title: 'Title3', data: ['item5', 'item6'] },
                      ]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        height: 44,
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 66,
    }
});