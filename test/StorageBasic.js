import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class StorageBasic extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
            "UID": "",
         };
         let UID123_object = {
             name: 'Chris',
             age: 30,
             traits: {hair: 'brown', eyes: 'brown'},
         };
         let UID123_delta = {
             age: 31,
             traits: {eyes: 'blue', shoe_size: 10},
         };
         AsyncStorage.setItem("UID123", JSON.stringify(UID123_object), () => {
             // this.setState({"UID": JSON.stringify()})
             AsyncStorage.getItem("UID123", (err, res) => {
                console.log("result", res);
                this.setState({"UID": res});
             });
         });
     }

     componentDidMount() {
         AsyncStorage.getItem("UID123", (err, res) => {
            console.log("result", res);
         });
     }

     render() {
         return (
             <View style={{flex: 1, margin: 44}}>
                 <Text>{this.state.UID}</Text>
             </View>
         )
     }
}