import React, { Component } from 'react';
import { TextInput, Text, View, Button, Alert } from 'react-native';

export default class PizzaTranslator extends Component {
    constructor(props) {
      super(props);
      this.state = {text: 'Useless PlaceHolder'};
    }
  
    render() {
      return (
        <View style={{padding: 40, borderColor: '#000000', borderWidth: 1}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            multiline={true}
            maxLength = { 40 }
            
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            {/* {this.state.text} */}
          </Text>
          <Button 
            onPress = { () => {
              Alert.alert('You tap a button');
            }}
            title= 'press me'
            color = '#034242'
          />
        </View>
      );
    }
  }