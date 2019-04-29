import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class TranslateOutput extends Component {
  render() {
    return (
      <View>
        <Text>TranslateOutput</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('TranslateOutput', ()=> TranslateOutput)