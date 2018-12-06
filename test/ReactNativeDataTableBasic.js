import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
} from 'react-native';

import {
    Cell,
    DataTable,
    Header,
    HeaderCell,
    Row,
    EditableCell,
} from 'react-native-data-table';

const data =  [
    {"isChecked": true, "no" : 1, "name" : "生殖医学中心", "qty":"10"},
    {"isChecked": false, "no" : 2, "name" : "肝胆胰外科肝胆胰外科一病区肝胆胰外科肝胆胰外科一病区", "qty":"10"},
    {"isChecked": true, "no" : 3, "name" : "肝胆胰外科一病区", "qty":"100"},
    {"isChecked": true, "no" : 4, "name" : "妇科一病区", "qty":"78"}
];

export default class ReactNativeDataTableBasic extends React.Component {

    constructor(props) {
      super(props);

      this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
          ds: this.ds.cloneWithRows(data),
      };
    }

    render() {
        return (
            <View style={styles.container}>
                <DataTable
                    dataSource={this.state.data}
                    renderRow={(item) => this.renderItem(item)}
                    renderHeader={() => this.renderHeader()}
                />
            </View>
        );
    }

    renderHeader() {
        return (
            <Header>
                <HeaderCell style={styles.headerCell} key="1" text="选择" width={1}/>
                <HeaderCell style={styles.headerCell} key="2" text="选择" width={1}/>
                <HeaderCell style={styles.headerCell} key="3" text="选择" width={1}/>
            </Header>
        );
    }

    renderItem(item) {
        return (
            <Row>
                <Cell style={styles.cell}>11111</Cell>
                <Cell style={styles.cell}>11111</Cell>
                <Cell style={styles.cell}>11111</Cell>
                <Cell style={styles.cell}>11111</Cell>
                <Cell style={styles.cell}>11111</Cell>
                <Cell style={styles.cell}>11111</Cell>
                <Cell style={styles.cell}>11111</Cell>
            </Row>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'white',
    },
    headerCell: {
        height: 40,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderColor: 'gray',
        justifyContent: 'center',
    },
    cell: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignTextLeft: {
        marginLeft: 20,
        textAlign: 'left',
    },
    whiteRow: {
        height: 35,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    row: {
        height: 35,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    alignTextCenter: {
        textAlign: 'center',
        justifyContent: 'center',
    },
});
