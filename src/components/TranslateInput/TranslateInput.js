import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class TranslateInput extends Component {
  render() {
    return (
      <View>
        <Text>TranslateInput</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('TranslateInput', ()=> TranslateInput)